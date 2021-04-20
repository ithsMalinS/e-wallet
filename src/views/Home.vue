<template>
  <div>
    <Top msg="E-WALLET"/>
    <Card v-if="card" msg="ACTIVE CARD" :card="card" />
    <button v-if="card" v-on:click="deleteCard">Delete this card</button>
    <span v-if="spanMessage">Your card has been deleted</span>
    <CardStack v-if="card" v-on:clickedCard="updateIndex" />
    <div v-else><p>WALLET IS EMPTY! 😥 </p></div>
    <router-link to="/addcard">ADD A NEW CARD</router-link> 
  </div>
</template>

<script>

import Top from '@/components/Top.vue'
import Card from '../components/Card.vue'
import CardStack from '../components/CardStack.vue'

export default {
  name: 'Home',
  data(){return{
    currentIndex: 0,
    spanMessage: false
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
      },
      deleteCard(){
        this.$root.cards.splice(this.currentIndex, 1)
        this.spanMessage = true
        setTimeout(function () { this.spanMessage = false }.bind(this), 2000)
      }
  } 
  
}
</script>

<style scoped>
div{
  display: flex;
  flex-direction: column;
}
button {
  margin-top: 5px;
  padding: 5px;
  cursor: pointer;
  color: red;
  align-self: center;
  outline: none;
  box-shadow: none;
  border: 0;
  background-color: inherit;
  font-weight: 700;
}
button:hover{
  text-decoration: underline;
  font-size: 0.9em;
  cursor: pointer;
}
p{
  text-align: center;
  margin: 2em 0 2em 0;
  font-weight: 700;
  font-size: 2em;
  color: rgb(107, 107, 107);
}
a{
   align-self: center;
    font-size: 1.5em;
    font-weight: 600;
    padding: 20px 0;
    width: 420px;
    background-color: white;
    color: black;
    text-align: center;
    text-decoration: none;
    border: 3px solid black;
    border-radius: 8px;
    cursor: pointer;
}
a:hover{
    background-color: black;
    color: white;
    border-color: white;
}
span{
  align-self: center;
  font-weight: 600;
}
</style>