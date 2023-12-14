<template>
  <div class="logo">
        <!-- <img src="limon.jpg"> -->
    <img alt="limon logo" src="../assets/limon.png">
    </div>
  <h1>Log In</h1>
  <form @submit.prevent="handleSubmit">
    <div class="form-container">
      <label>Enter Email:</label>
      <input type="email" v-model="email" required><br>
      <label>Enter Password:</label>
        <input type="password" v-model="password" required><br>
    </div>
  
    <p>
      <router-link :to="{ name: 'Sign_Up' }">Sign_Up</router-link>
    </p>
    
    <button class="button" @click="home">Login</button>

    

  </form>
</template>

<script>
import axios from 'axios';
export default {
name:"Login",
data(){
  return{
    email:"",
    password:""
  }
},
methods:{
  async home(){
    //  let user=await axios.get(`localhost:3000/users?email=${this.email}&password=${this.password}`)
    let user = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)


     if(user.status==200 && user.data.length>0){
      //convert data to json and strore it in local storage
      localStorage.setItem("user-info",JSON.stringify(user.data[0]))
      this.$router.push({name:"home"})
      
   
  }
 
}
},
mounted(){
  
  // if data is match with local storage item go to home page
    // let user=localStorage.getItem('user-info')
    //   if(user){
    //     this.$router.push({name:"home"})
       
    //   }

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