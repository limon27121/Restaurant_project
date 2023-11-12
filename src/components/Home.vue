<template>
   <Header/>
  <h1>welcome to home page</h1>
  <button  @click="back" class="blue-button">back to sign up page</button><br>
  <button @click="login" class="blue-button" style="margin-top: 10px;">Back to log in  Page</button>
 
</template>

<script>
import Header from "./Header.vue"
// export default {
// name:'Home',
// methods:{
//     redirect(){
//       this.$router.push({name:"Home"})
//     },
// }
export default {
  name: 'Home',
  components:{
    Header},
  methods: {
    back() {
      this.$router.push({ name: 'Sign_Up' });
    },
    login(){
      this.$router.push({name:'Login'})
    }
  },
};

</script>

<style>
.blue-button {
  background-color: blue;
  color: white;
  /* Add additional styling as needed */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>