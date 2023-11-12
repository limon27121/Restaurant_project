<template>
  <h1>welcome to home page</h1>
  <button  @click="back" class="blue-button">back to sign up page</button>
</template>

<script>
// export default {
// name:'Home',
// methods:{
//     redirect(){
//       this.$router.push({name:"Home"})
//     },
// }
export default {
  name: 'Home',
  methods: {
    back() {
      this.$router.push({ name: 'Sign_Up' });
    },
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