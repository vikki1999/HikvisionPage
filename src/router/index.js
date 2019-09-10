import Vue from 'vue'
import VueRouter  from 'vue-router'

Vue.use(VueRouter )

const head = r => require.ensure([], () => r(require('@/pages/Head')), 'head');
const home = r => require.ensure([], () => r(require('@/pages/Home')), 'home');
const Bar = { template: '<div>bar</div>' };

const routes = [
	{
		path: '/',
		component: head,
		name: '',
		children: [{
			path: '/home',
			component: home,
			meta: [],
		},{
			path: '/bar',
			component: Bar,
			meta: ['添加数据', '添加商铺'],
		},]
	}
]

export default new VueRouter ({
  routes,
})
