import { routes, defaultRoutes } from './router'

// m.route.prefix = '' (Rewrite server needed)
m.route(document.body, defaultRoutes, routes)
