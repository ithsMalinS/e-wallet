<template>
    <div class="wrapper">
        <div>
            <Card 
            v-for="card in cards"
            v-bind:key="card.cardnr"
            :card="card"
            v-on:clickedCard="updateCard"
        />
        </div>
        
        <router-link to="/addcard">ADD A NEW CARD</router-link> 

    </div>
</template>

<script>
import Card from './Card.vue'
export default {
    components: { Card },
    computed: {
       cards(){
           return this.$root.cards
       }
    },
    methods: {
        updateCard(card){
          this.$emit('clickedCard', card)
        }
    }
}

</script>

<style scoped>

.wrapper{
    margin-bottom: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.wrapper > div{
    margin-top: 17em;
    display: flex;
    flex-direction: column;
}
.wrapper > div > *{
    margin-top: -17em;
}
a{
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

</style>