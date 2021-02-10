<template>
    <div class="wrapper">
        <h4>{{ msg }}</h4>
        <div class="card-wrapper" v-bind:class="card.vendor" v-on:click="updateCard">
            <div class="top">
                <img :src="chip" class="chip">
                <img :src="icon" class="vendor">
            </div>
            <h1 class="number">{{card.cardnr}}</h1>
            <div class="label">
                <p>CARDHOLDER NAME</p>
                <p>VALID THRU</p>
            </div>
            <div class="card-info">
                <h3>{{card.cardhld}}</h3>
                <h3>00 / 00</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: String,
        card: Object
    },
    computed: {
       icon() {
            return require('@/assets/vendor-' + this.card.vendor.toLowerCase() + '.svg')
       },
       chip() {
           if(this.card.vendor == 'Ninja') {
               return require('@/assets/chip-light.svg')
           } else {
               return require('@/assets/chip-dark.svg')
           }
        }
    },
    methods: {
        updateCard(){
          this.$emit('clickedCard', this.card)
        }
    }

}
</script>

<style scoped>
    h4 {
        color: grey;
        font-weight: 600;
        margin-bottom: 0.6em;
    }
    .wrapper {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card-wrapper {
        color: whitesmoke;
        height: 250px;
        width: 420px;
        border-radius: 3%;
        box-shadow: 2px 2px 3px lightgray;
        cursor: pointer;
    }
    .top {
        padding: 1rem 1.3rem;
        display: flex;
        justify-content: space-between;
    }
    .vendor {
        margin-top: -2rem;
    }
    .number{
        margin-top: -0.2rem;
        letter-spacing: 0.25rem;
        font-weight: 400;
        text-align: center;
    }
    .label, .card-info{
        padding: 0 1.3rem;
        display: flex;
        justify-content: space-between;
    }
    h3{
        font-weight: 400;
    }
    .card-info{
        margin-top: -1.7rem;
        text-transform: uppercase;
    }
    .Evil{
        background-color: red;
    }
    .Blockchain{
        background-color: blue;
        color: whitesmoke;
    }
    .Bitcoin{
        background-color: yellow;
        color: black;
    }
    .Ninja{
        background-color: black;
        color: whitesmoke;
    }
    .Empty{
        background-color: grey;
    }
    
</style>