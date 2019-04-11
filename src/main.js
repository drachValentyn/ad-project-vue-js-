import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as firebase from 'firebase'
import './stylus/main.styl'
//import colors from 'vuetify/es5/util/colors'


Vue.config.productionTip = false

Vue.use(Vuetify, {
    // theme: {
    //     primary: colors.green.darken2, // #E53935
    // }
})

Vue.component('app-buy-modal', BuyModalComponent)

new Vue({
    router,
    store,
    render: h => h(App),
    created: function () {
        firebase.initializeApp({
            apiKey: "AIzaSyC8B-riPr-yddHbJQTChyyGmUvU6KwhrHU",
            authDomain: "vue-ads-dev.firebaseapp.com",
            databaseURL: "https://vue-ads-dev.firebaseio.com",
            projectId: "vue-ads-dev",
            storageBucket: "vue-ads-dev.appspot.com",
            messagingSenderId: "312594030642"
        })
        firebase.auth().onAuthStateChanged(user => {
            if( user ){
                this.$store.dispatch('autoLoginUser', user)
            }
        })

        this.$store.dispatch('fetchAds')

    }
}).$mount('#app')
