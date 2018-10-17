<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component='form-one'">Show form one</button>
    <button @click="component='form-two'">Show form two</button>
  </div>
</template>

<script>
import formOne from "./components/FormOne.vue"
import formTwo from "./components/FormTwo.vue"
export default {
  components:{
    "form-one": formOne,
    "form-two": formTwo
  },
  data () {
    return {
      component: "form-two"
    }
  },
  methods:{
  }
}
</script>

<style>

</style>
