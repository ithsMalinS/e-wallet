<template>
    <div class="wrapper">

        <form v-on:submit.prevent="submitForm" v-on:keyup="update">
            <label for="cardnr">CARD NUMBER</label>
            <input v-model="newCard.cardnr" type="text" name="cardnr" pattern="[0-9]{16}" title="Your card number must contain 16 digits" required>
            <label for="cardholder">CARDHOLDER NAME</label>
            <input v-model="newCard.cardhld" type="text" name="cardholder" pattern="[A-Za-z]+" title="Your name can not contain numbers..." required>
            <div>
                <label for="valid">VALID THRU</label>
                <label for="ccv">CCV</label>
            </div>
            <div>
                <input v-model="newCard.valid" type="text" name="valid" pattern="[0-9]{4}" title="Enter your validation date in MMYY-format, e.g 0122" required>
                <input v-model="newCard.ccv" type="text" name="ccv" pattern="[0-9]{3}" title="Your CCV must contain 3 digits" required>
            </div>
            <label for="vendor">VENDOR</label>
            <select v-model="newCard.vendor" name="vendor" v-on:click="update" required>
                <option value="bitcoin">BITCOIN INC</option>
                <option value="ninja">NINJA BANK</option>
                <option value="blockchain">BLOCKCHAIN INC</option>
                <option value="evil">EVIL CORP</option>
            </select>
            <button>ADD CARD</button>
        </form>

         <router-link to="/">HOME</router-link> 


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
            this.$emit('fill', this.newCard)
        },
        submitForm(){
            this.$emit('formSubmit', this.newCard)
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style scoped>

    .wrapper{
        margin-top: 3em;
        justify-content: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    form {
        width: 420px;
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-bottom: 5em;
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
    button, input, select {
        border: 1px solid grey;
        border-radius: 5px;
    }
    button {
        border: 2px solid white;
        padding: 10px;
        background-color: black;
        color: white;
        font-size: 1.2em;
        font-weight: 700;
        cursor: pointer;
    }
    button:hover{
        background-color: white;
        border: 2px solid black;
        color: black;
    }

</style>