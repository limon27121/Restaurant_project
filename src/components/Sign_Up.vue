<template>
    <div class="logo">
        <!-- <img src="limon.jpg"> -->
    <img alt="limon logo" src="../assets/limon.png">
    </div>
  <h1>SignUp</h1>
  <form @submit.prevent="handleSubmit">
    <div class="form-container">
    <label>Enter Name:</label>
      <input type="text" required><br>
      <label>Enter Email:</label>
      <input type="email" required><br>
      <label>Enter Password:</label>
        <input type="password" v-model="password" required>
        <div class="error" :style="{ color: passwordErrorColor }">{{ passwordError }}</div><br>
    </div>
    <button class="b1">sign up</button><br>
    <p>
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </p>

  </form>
  
</template>

<script>
export default {

    data() {
      return {
        name: '',
        email: '',
        password: '',
        passwordError: null,
        passwordErrorColor:'red',
        logged: false
      }
    },
    name:'Sign_Up',
    methods:{
        handleSubmit() {
        // validate password
        this.passwordError = this.password.length >= 6 ?
        "" : 'Password must be at least 6 characters long';

        // Completed
        // this.name = '';
        // this.email = '';
        // this.password = '';
        if (this.passwordError ==='') {
        this.$router.push({name:"home"})
        // this.resetForm();
      }
      
    }
    },
    mounted(){
      this.logged=true
      if(this.logged==true){
        // this.$router.push({name:"home"})
       
      }
      this.logged=false
    }

}
</script>

<style>
.logo img {
    width: 200px; /* Set the desired width */
    height: auto; /* Automatically adjust the height to maintain the image's aspect ratio */
}
.form-container {
    width: 300px; /* Set the desired width for the container */
    margin: 0 auto; /* Center the container horizontally */
}

label {
    display: block; /* Make labels take up the full width of the container and appear on separate lines */
    margin-bottom: 5px; /* Add spacing between labels and input fields */
}

input {
    width: 100%; /* Make input fields take up the full width of the container */
    padding: 5px; /* Add padding for spacing within input fields */
    margin-bottom: 10px; /* Add spacing between input fields */
    border: 1px solid #ccc; /* Add a border to input fields */
    border-radius: 4px; /* Round the corners of input fields */
}

input:focus {
    outline: none; /* Remove the default focus outline */
    border: 1px solid #007BFF; /* Change the border color on focus */
}
.b1{
    background: #0b6dff;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: white;
      border-radius: 20px;
}

</style>