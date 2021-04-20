<template>
    <div class="wrapper">
        <h4>{{ msg }}</h4>
        <div class="card-wrapper" v-bind:class="classes" v-on:click="updateCard">
            <div class="top">
                <img :src="chip" class="chip">
                <img :src="icon" class="vendor">
            </div>
            <h1 class="number">
                {{cardnr.slice(0, 4)}}
                {{cardnr.slice(4, 8)}}
                {{cardnr.slice(8, 12)}}
                {{cardnr.slice(12, 16)}}
            </h1>
            <div class="label">
                <p>CARDHOLDER NAME</p>
                <p>VALID THRU</p>
            </div>
            <div class="card-info">
                <h3>{{card.cardhld}}</h3>
                <h3>{{valid.slice(0,2)}} / {{valid.slice(2)}}</h3>
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
        cardnr(){
            if (typeof(this.card.cardnr) !== 'string'){
                return this.card.cardnr.toString()
            } else {
                return this.card.cardnr
            }
        },
        valid(){
            if (typeof(this.card.valid) !== 'string'){
                return this.card.valid.toString()
            } else {
                return this.card.valid
            }
        },
        classes(){
            if (this.card.vendor == '') {
                return 'empty'
            } else {
                return this.card.vendor
            }
        },
       icon() {
           if (this.card.vendor == '') {
               return require('@/assets/vendor-' + "Bitcoin".toLowerCase() + '.svg')
           } else {
               return require('@/assets/vendor-' + this.card.vendor.toLowerCase() + '.svg')
           }            
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
    .evil{
        background-color: #DD2E4D;
    }
    .blockchain{
        background-color: #7D4FE1;
        color: whitesmoke;
    }
    .bitcoin{
        background-color: #FFB545;
        color: black;
    }
    .ninja{
        background-color: #393939;
        color: whitesmoke;
    }
    .empty{
        background-color: #D7D7D7;
        color: black;
    }
    
</style>