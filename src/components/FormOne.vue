<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form one - contact us</h3>
        <p>Fill in this form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name"/>
        <label> Your message</label>
        <textarea placeholder="Type your message here"></textarea>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Send</button>
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
