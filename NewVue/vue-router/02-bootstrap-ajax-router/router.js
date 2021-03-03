;
(function() {
    window.router = new VueRouter({
        linkActiveClass: 'active',
        routes: [{
                path: '/',
                component: AppHome
            }, {
                path: '/news',
                component: News,
                children: [{
                        path: '/news/sport',
                        component: Sport,
                        children: [{
                            path: '/news/sport/detail/:id',
                            component: SportDetail
                        }, ]
                    },
                    {
                        path: 'teach',
                        component: Teach,
                        children: [{
                            path: '/news/teach/detail/:id',
                            component: TeachDetail
                        }]
                    }
                ]
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/',
                component: AppHome
            },
        ]
    })
})()