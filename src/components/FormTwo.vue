<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form two - log in</h3>
        <p>Enter your credentials to log in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required/>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Login</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./FormHelper.vue"
export default {
  components:{
    "form-helper": formHelper
  },
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

<style>

</style>
