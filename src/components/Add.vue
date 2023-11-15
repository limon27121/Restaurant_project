

<template>
  <div>
    <Header />
    <h1>Welcome To Add Restaurant Page</h1>

    <form @submit.prevent="submitForm" class="restaurant-form">
      <label for="rname">Restaurant Name:</label>
    <input type="text" id="rname" name="rname" placeholder="Enter restaurant name" v-model="name" required>

    <label for="address">Address:</label>
    <input type="text" id="address" name="address" placeholder="Enter address" v-model="address" required>

    <label for="contact">Contact:</label>
    <input type="text" id="contact" name="contact" placeholder="Enter contact number" v-model="contact" required>

    <input type="submit" value="Add Restaurant" @click="add">
  
    </form>

   </div>
</template>

<script>
import Header from "./Header.vue"; // Import the Update component
import axios from "axios";
export default {
  name: "Add",
  data(){
    return{
    name:"",
    address:"",
    contact:""
    }
  },
  components: {
    Header, // Register the Update component
  },
  data() {
    return {
  
    };
  },
  computed: {
  },
  methods: {
 async add(){

    let value= await axios.post("http://localhost:3000/restaurant",{
      //store value
      name:this.name,
      address:this.address,
      contact:this.contact
    })
    if(value.status==201){
      this.$router.push({name:"home"})
    }
   
  }
  },
};
</script>

<style>

.body1 {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.restaurant-form {
  background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    box-sizing: border-box;
    text-align: center; /* Center the form content */
    margin: auto; 
}

label {
    display: block;
    margin-bottom: 8px;
    color: #333;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

input[type="submit"] {
    background-color: #4CAF50;
    color: #fff;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #45a049;
}

</style>