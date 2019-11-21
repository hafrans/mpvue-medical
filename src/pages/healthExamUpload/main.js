import Vue from 'vue'
import App from './index'
import store from "./store"

import { mapState, mapGetters } from 'vuex'

const app = new Vue({
    store,
    render: h => h(App),
    mounted() {
        wx.setNavigationBarTitle(this.$root.$mp.query);
        this.title = this.$root.$mp.query.title;
        this.desc = this.$root.$mp.query.desc;
    },
    data() {
        return {
            fileList: [
                 { url: '/static/images/hotel3.jpeg' },
                 { url: '/static/images/hotel2.jpeg' },
                 { url: '/static/images/hotel1.jpeg' },
            ],
            captiond: "asdasdad",
            title: "",
            desc: ""
        }
    },
    methods: {
        
    },
    computed: {
        mtitle() {
            return this.$root.$mp.query.title;
        },
        mcaption() {
            return this.captiond;
        }
    }
}).$mount("#app")
