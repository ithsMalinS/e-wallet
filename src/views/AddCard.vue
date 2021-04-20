<template>
  <div class="about">
    <Top msg="ADD A NEW BANKCARD"/>
    <Card msg="NEW CARD" :card="emptyCard" />
    <CardForm v-on:formSubmit="newCard" v-on:fill="update"/>
  </div>
</template>


<script>
import Top from '@/components/Top.vue'
import Card from '../components/Card.vue'
import CardForm from '../components/CardForm.vue'

export default {
  name: 'AddCard',
  components: {
    Top,
    Card,
    CardForm
  },
  data(){return{
    emptyCard: {
      cardnr: 'xxxxxxxxxxxxxxxx',
      cardhld: 'Firstname Lastname',
      valid: 'MMYY',
      ccv: '',
      vendor: ''
    }
  }},
  methods: {
    update(card){
      this.emptyCard = card
    },
    newCard(card){
      this.$root.cards.push(card)
    }
  }
}
</script>

<style scoped>
</style>
