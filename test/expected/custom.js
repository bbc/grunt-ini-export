window.APP = {
    "routes": [
        [
            {
                "name": "route1",
                "path": "/",
                "module": "module1",
                "view": "view/home/view"
            },
            {
                "name": "route2",
                "path": "/system/test/error/:code/:message",
                "module": "module2",
                "code": "404",
                "message": "Not found"
            },
            {
                "name": "route3",
                "path": "/static",
                "module": "module3"
            }
        ]
    ]
}