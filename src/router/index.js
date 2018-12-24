import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Header from '@/pages/home/components/header'
import City from '@/pages/City/City'


Vue.use(Router)

export default new Router({
  routes:[
    {
      path:"/",
      redirect:{path:"/home"}
    },
    {
     path:"/home",
     name:"Home",
     component:Home
    },
		{
			path:"/header",
			name:"Header",
			component:Header
    },
    {
      path:"/city",
      name:"City",
      component:City
    }
   
  ]
})
