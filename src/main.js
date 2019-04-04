import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import * as firebase from 'firebase'

Vue.config.productionTip = false

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

    }
}).$mount('#app')
