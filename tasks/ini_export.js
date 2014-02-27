/*
 * grunt-ini-export
 * https://github.com/cpaulcurley/grunt-ini-export
 *
 * Copyright (c) 2014 Paul C
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path'),
    ini = require('ini'),
    _ = require('lodash');

module.exports = function(grunt) {

    grunt.registerMultiTask('ini_export', 'Export ini files to a global JS object', function() {

        var options = this.options({
            outfile: 'tmp/config.js',
            namespace: 'Bootstrap',
            deleteKeys: [],
            exclude: []
        }),

        swapKey = function(key) {
           var match = _.find(options.swapKeys, function(k) {
              return k[key];
            });
            return match ? match[key] : key;
        },

        removeKeys = function (key) {
            if (options.exclude.indexOf(key) === -1) {
                return key
            }
        },

        processKeys = function(key) {
            for (var i = 0, l = options.deleteKeys.length; i < l; i ++) {
                var val = options.deleteKeys[i];
               key = key.replace(val + '.', '');
            }
            key = swapKey(key);

            return removeKeys(key);
        },

        processedIni = {};


        this.files.forEach(function(f) {
            processedIni[path.basename(f.src).replace('.ini', '')] = f.src.map(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    var items = [],
                        parsed = ini.parse(grunt.file.read(filepath)),
                        keys  = _.keys(parsed),
                        name =  keys[0].split('.')[0],
                        obj = {},
                        processed = {},
                        i, l = keys.length;

                    for (i = 0; i < l; i ++) {
                        var value = parsed[keys[i]],
                            currentName = keys[i].split('.')[0],
                            currentKey = keys[i].replace(name + '.', '');

                        if (name === currentName) {
                            obj.name = currentName;
                            currentKey = processKeys(currentKey);
                            if (currentKey) {
                                obj[currentKey] = value;
                            }
                        }else {
                            items.push(obj)
                            name = currentName;
                            obj = {};
                        }
                    }
                    return items;
                }
            });

            processedIni = 'window.' + options.namespace + ' = ' + JSON.stringify(processedIni, null, 4);
            grunt.file.write(options.outfile, processedIni);
            grunt.log.writeln('File "' + options.outfile + '" created.');
        });
    });

};
