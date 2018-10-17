<template>
  <ul>
    <h1>List of ninjas</h1>
    <li v-for="ninja in ninjas">{{ninja}}</li>
  </ul>
</template>

<script>
export default {

  data () {
    return {
      ninjas:["Leo", "Raph", "Mike", "Don"]
    }
  }
}
</script>

<style scoped>
h1{
  color:cyan;
}
</style>
