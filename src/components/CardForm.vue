<template>
    <div class="wrapper">

        <form v-on:submit.prevent="submitForm" v-on:keyup="update">
            <label for="cardnr">CARD NUMBER</label>
            <input v-model="newCard.cardnr" type="text" name="cardnr">
            <label for="cardholder">CARDHOLDER NAME</label>
            <input v-model="newCard.cardhld" type="text" name="cardholder">
            <div>
                <label for="valid">VALID THRU</label>
                <label for="ccv">CCV</label>
            </div>
            <div>
                <input v-model="newCard.valid" type="text" name="valid">
                <input v-model="newCard.ccv" type="text" name="ccv">
            </div>
            <label for="vendor">VENDOR</label>
            <select v-model="newCard.vendor" name="vendor" v-on:click="update">
                <option value="bitcoin">BITCOIN INC</option>
                <option value="ninja">NINJA BANK</option>
                <option value="blockchain">BLOCKCHAIN INC</option>
                <option value="evil">EVIL CORP</option>
            </select>
            <button>ADD CARD</button>
        </form>


    </div>
</template>

<script>
export default {

    data(){return{
        newCard: {
            cardnr: '',
            cardhld: '',
            valid: '',
            ccv: '',
            vendor: ''
        }
        
    }},

    methods: {
        update(){
            console.log('update')
            this.$emit('fill', this.newCard)
        },
        submitForm(){
            console.log(this.newCard)
            this.$emit('formSubmit', this.newCard)
        }
    }
}
</script>

<style scoped>

    .wrapper{
        margin-top: 3em;
        justify-content: center;
        display: flex;

    }
    form {
        width: 420px;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    form > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    input {
        text-transform: uppercase;
    }
    input, select {
        margin-bottom: 15px;
        padding: 10px;
    }
    button {
        padding: 10px;
        background-color: black;
        color: white;
        font-size: 1.2em;
        font-weight: 700;
        cursor: pointer;
    }
    button, input, select {
        border: 1px solid grey;
        border-radius: 5px;
    }

</style>