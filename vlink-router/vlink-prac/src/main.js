// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '*', component: NotFound}
]

const router = new VueRouter({
  mode: 'history',
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
// const routes = {
//   '/': Home,
//   '/about': About
// }

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   data: {
//     curRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       return routes[this.curRoute] || NotFound
//     }
//   },
//   render (h) { return h(this.ViewComponent) }
// })
