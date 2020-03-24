import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChangePic from '@/components/ChangePic'
import btn1 from '@/components/btn1'
import btn2 from '@/components/btn2'
import Counter from '@/components/Counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Changepic',
      name: 'ChangePic',
      component: ChangePic
    },
    {
      path: '/btn1',
      name: 'btn1',
      component: btn1
    },
    {
      path: '/btn2',
      name: 'btn2',
      component: btn2
    },
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
