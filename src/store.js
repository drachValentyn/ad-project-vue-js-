import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ads: [
            {
                title: 'First ad',
                description: 'Hello, I am descr',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '123'

            },
            {
                title: 'Second ad',
                description: 'Hello, I am descr',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '1234'

            },
            {
                title: 'Third ad',
                description: 'Hello, I am descr',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '12345'

            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds(state) {
            return state.ads
        }
    }
})
