import Vue from 'vue'
import router from 'vue-router'
import first from './../vuepages/first/first.vue'
import second from './../vuepages/second/second.vue'
import apmsdk from './../vuepages/apmsdk/third.vue'
import apmsdkRoute from './routes/apmsdk'
Vue.use(router);
const routerOrigin = router.prototype.push;
router.prototype.push = function push(location) {
    return routerOrigin.call(this, location).catch(err => err)
}
export default new router({
    routes: [{
            path: '/',
            redirect: '/apmsdk'
                // name: 'index',
                // component: index,
                // mata: {}
        },
        {
            path: '/first',
            name: 'first',
            component: first,
            mata: { name: 'first' }
        },
        {
            path: '/second',
            name: 'second',
            component: second,
            meta: { name: 'second' }

        },
        {
            path: '/apmsdk',
            name: 'apmsdk',
            component: apmsdk,
            redirect: '/dataview',
            children: [...apmsdkRoute],
            meta: { name: 'apmsdk' }

        }
    ]
})