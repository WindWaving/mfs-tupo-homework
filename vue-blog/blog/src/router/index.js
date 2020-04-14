import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/About'
import Article from '@/components/Article'
import ArticleList from '@/components/ArticleList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    }
  ]
})
