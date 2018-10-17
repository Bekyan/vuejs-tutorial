<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
//registering a component locally
import Ninjas from './Ninjas.vue'
export default {
  components:{
    "ninjas":Ninjas
  },
  data () {
    return {
      title:"Ninja app",

    }
  }
}
</script>

<style scoped>
h1{
  color:crimson;
}

</style>
