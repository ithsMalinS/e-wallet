import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import cardsData from '@/assets/cards.json'

new Vue({

  data(){return {
    cards: cardsData.cards
  }},

  router,
  render: h => h(App)
}).$mount('#app')
