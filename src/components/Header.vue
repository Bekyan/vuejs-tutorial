<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
import {bus} from "../main"
export default {
  props: ["title"],
  data () {
    return {
    }
  },
  methods: {
    changeTitle: function(){
      //this.$emit("changeTitle", "Vue Warriors");
      //this.title = "Vue Warriors";
      bus.$emit("titleChanged", "Vue Warriors");
    }
  }
}
</script>

<style scoped>
header{
  background-color:lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
