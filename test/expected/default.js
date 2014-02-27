window.Bootstrap = {
    "routes": [
        [
            {
                "name": "route1",
                "type": "sometype",
                "route": "/",
                "defaults.module": "module1",
                "defaults.controller": "home",
                "defaults.action": "Home",
                "defaults.view": "view/home/view"
            },
            {
                "name": "route2",
                "route": "/system/test/error/:code/:message",
                "defaults.module": "module2",
                "defaults.controller": "error",
                "defaults.action": "testError",
                "defaults.code": "404",
                "defaults.message": "Not found"
            },
            {
                "name": "route3",
                "route": "/static",
                "defaults.module": "module3",
                "defaults.controller": "static",
                "defaults.action": "Redirect"
            }
        ]
    ]
}