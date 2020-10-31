import './style.css'

export default {
	view: (vnode) => {
		return m('main', [
			m('p.block', 'This is index page.'),
			m(m.route.Link, { href: '/hello/user'}, 'Hello page')
		])
	}
}
