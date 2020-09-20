import dataView from '../../vuepages/apmsdk/pages/dataView.vue'
import netTest from '../../vuepages/apmsdk/pages/netTest.vue'
export default [{
        path: '/dataview',
        name: 'dataview',
        component: dataView,
        meta: {
            name: 'apmsdk'
        }
    },
    {
        path: '/nettest',
        name: 'nettest',
        component: netTest,
        meta: {
            name: 'apmsdk'
        }
    }

]