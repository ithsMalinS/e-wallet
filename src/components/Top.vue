<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    msg: String
  }
}
</script>


<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: black;
  font-size: 2.5em;
  max-width: 250px;
}
</style>
