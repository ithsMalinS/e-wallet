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

</style>