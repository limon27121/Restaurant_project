
<template>
    
        <Header/>
      <h1>Welcome To Update Page</h1>
      <form @submit.prevent="submitForm" class="restaurant-form">
      <label for="rname">Restaurant Name:</label>
    <input type="text" id="rname" name="rname" placeholder="Enter restaurant name" v-model="name" required>

    <label for="address">Address:</label>
    <input type="text" id="address" name="address" placeholder="Enter address" v-model="address" required>

    <label for="contact">Contact:</label>
    <input type="text" id="contact" name="contact" placeholder="Enter contact number" v-model="contact" required>

    <input type="submit" value=" Update" @click="add">
  
    </form>
    <!-- <div>{{ id }}</div> -->
     
  </template>
  
  <script>
//   import Add from "./Add.vue";
//   import Header from "./Header.vue"
import Add from "@/components/Add.vue"
import Header from "@/components/Header.vue"
import Home from "@/components/Home.vue"
import axios from "axios"
  export default {
  data(){
    return{
        restaurant:{
       name:"",
       address:"",
       contact:""
    }
  }
},
    name: "Update1",
    components: {
      Add,
      Header,
      Home
    },
    props: ['id'],
    methods:{
         async add(){

    // if there is no user they push to sign up page
     
    let res = await axios.put(`http://localhost:3000/restaurant/${this.$route.params.id}`, {
  name: this.name,
  address: this.address,
  contact: this.contact
});
     if(res.status==200){
        this.$router.push({name:"home"})
     }
      
        }
    },
 async mounted(){
   let user=localStorage.getItem('user-info')

   // if there is no user they push to sign up page
     if(!user){
       this.$router.push({name:"Sign_Up"})
      
     }

     let result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id);

     this.restaurant=result.data
   },
    
  }


// export default {
//   async mounted() {
//     let user = localStorage.getItem('user-info');

//     // If there is no user, redirect to the Sign Up page
//     if (!user) {
//       this.$router.push({ name: "Sign_Up" });
//       return; // Return to prevent further execution of the code
//     }

//     try {
//       // Make the axios GET request to fetch restaurant data
//       let result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id);

//       // Check if the response contains data
//       if (result && result.data) {
//         this.restaurant = result.data;

//         // Log the retrieved restaurant data (optional)
//         console.log("Retrieved restaurant data:", this.restaurant);
//       } else {
//         // Handle the case when no data is returned
//         console.error("No data received from the server.");
//       }
//     } catch (error) {
//       // Handle any errors that occurred during the request
//       console.error("Error fetching restaurant data:", error);
//     }
//   },
//   data() {
//     return {
//       restaurant: {
//         name:"",
//         address:"",
//         contact:""
//       } // Initialize the restaurant data property
//     };
//   }
// };

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