<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form>
      <label>Blog title:</label>
      <input type="text" v-model.lazy="blog.title" required/>
      <label>Blog content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Turtles</label>
        <input type="checkbox" value="turtles" v-model="blog.categories"/>
        <label>Teenagers</label>
        <input type="checkbox" value="teenagers" v-model="blog.categories"/>
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories"/>
        <label>Mutants</label>
        <input type="checkbox" value="mutants" v-model="blog.categories"/>
      </div>
    </form>
    <div id="preview">
      <h3>Preview blog:</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content:</p>
      <p>{{blog.content}}</p>
      <p>Categories</p>
      <ul>
        <li v-for="cat in blog.categories">{{cat}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        title:"",
        content:"",
        categories:[

        ]
      }
    }
  },
  methods:{
  }
}
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>
