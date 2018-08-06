<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This app is to help anyone exposed to the elements prepare for a rainy day. (ex: motorcyclist, bicyclist & pedestrians)</h2>
       <form v-on:submit.prevent="sunTimes">
      <p> <input type="text" v-model="rhyme"> Enter City <br> <br><button type="submit">Search</button></p>
    </form>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Link
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Link
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Link
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
         Link
        </a>
      </li>
      <br>
     </ul>
   </div>
</template>

<script>
    
import axios from 'axios'    
    
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Will it Rain?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h1, h2 {
  font-weight: normal;
     color: slategray;
     
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
</style>
