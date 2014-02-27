# grunt-ini-export

> Export ini files to a global JS object

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ini-export --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ini-export');
```

## The "ini_export" task

### Overview
In your project's Gruntfile, add a section named `ini_export` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    ini_export: {
      options: {},
      files: ['test/fixtures/*.ini'],
    }
});
```

### Options

#### options.outfile
Type: `String`
Default value: `'tmp/config.js'`

A filepath to write to..

#### options.namespace
Type: `String`
Default value: `'Bootstrap'`

Namespace is required. An object will be created with this namespace and also nested with the filename

#### options.swapKeys
Type: `Array`

An array of key->val options to swap/ rename keys if needed


#### options.deleteKeys
Type: `Array`

An array of string values to remove from object naming.

#### options.exclude
Type: `Array`

An array of string values to exclude exporting certain keys.


### Usage Examples

#### Custom Options

```js
grunt.initConfig({
    ini_export: {
        files: ['test/fixtures/*.ini'],
        options: {
            outfile: 'tmp/config.js',
            namespace: 'APP',
            swapKeys: [{
                'route' : 'path'
            }],
            deleteKeys: ['defaults'],
            exclude: ['routes', 'type', 'action']
        }
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
