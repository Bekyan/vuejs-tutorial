<template>
  <div>
    <app-header v-bind:title="title" @changeTitle="updateTitle($event)"></app-header>

    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>

    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Ninjas from "./components/Ninjas.vue"
export default {
  components:{
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas
  },
  data () {
    return {
      ninjas: [
        {name: "Leo", specialty: "Ninjato", show:false},
        {name: "Raph", specialty: "Sai", show:false},
        {name: "Mike", specialty: "Nunchaku", show:false},
        {name: "Don", specialty: "Bo", show:false},
      ],
      title: "Vue Ninjas"
    }
  },
  methods:{
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    }
  }
}
</script>

<style>

</style>
