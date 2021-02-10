<template>
  <div>
    <Top msg="E-WALLET"/>
    <Card msg="ACTIVE CARD" :card="card" />
    <CardStack v-on:clickedCard="updateIndex" />
  </div>
</template>

<script>

import Top from '@/components/Top.vue'
import Card from '../components/Card.vue'
import CardStack from '../components/CardStack.vue'

export default {
  name: 'Home',
  data(){return{
    currentIndex: 0
  }},
  components: {
    Top,
    Card,
    CardStack
  },
  computed: {
    card(){
           return this.$root.cards[this.currentIndex]
       }
  },
   methods: {
      updateIndex(newCard) {
      this.currentIndex = this.$root.cards.findIndex(card => card.cardnr == newCard.cardnr)
    }
  } 
  
}
</script>

<style scoped>

</style>