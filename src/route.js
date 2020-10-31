// Usage example: pages('welcome')
// This will import ./src/pages/welcome.js as module
let pages = (path) => {
	return require(`@/pages/${path}`).default
}

// Usage: layout('welcome', { title: 'Welcome Page'}, 'layout')
// Import pages with layout which can be customize in third parameter
let layout = (path, attrs, layout = 'layout') => {
	const Layout = require('@/components/'+layout).default
	
	return {
		render: () => m(Layout, attrs, m(pages(path)) )
	}
}


// Write routes here
const routes = {
	'/': layout('index', { title: 'Title Index' }),
	'/about': layout('about'),
	'/hello/:name': pages('hello'),
	'/:404': pages('not-found')
}


// Default routes are index
const defaultRoutes = '/'

export { defaultRoutes, routes }
