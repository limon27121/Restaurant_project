<template>
  <div class="logo">
        <!-- <img src="limon.jpg"> -->
    <img alt="limon logo" src="../assets/limon.png">
    </div>
  <h1>Log In</h1>
  <form @submit.prevent="handleSubmit">
    <div class="form-container">
      <label>Enter Email:</label>
      <input type="email" required><br>
      <label>Enter Password:</label>
        <input type="password" v-model="password" required>
        <div class="error" :style="{ color: passwordErrorColor }">{{ passwordError }}</div><br>
    </div>
  
    <p>
      <router-link :to="{ name: 'Sign_Up' }">Sign_Up</router-link>
    </p>
    
    <button class="button" @click="home">Login</button>

    

  </form>
</template>

<script>
export default {
name:"Login",
methods:{
  home(){
    this.$router.push({name:"home"})
  }
}
}
</script>

<style>
.button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: black;
}
</style>