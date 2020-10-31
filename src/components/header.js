export default {
	view: (vnode) => {
		return m('header', [
			m('h1', vnode.attrs.title)
		])
	}
}
