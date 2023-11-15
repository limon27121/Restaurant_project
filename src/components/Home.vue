<template>
   <Header/>
  <h1>Welcome To Home Page</h1>
  <table class="styled-table">
    <tr class="t1">
      <td>ID</td>
      <td>Restaurant Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Update</td>
      <td>Delete</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.contact}}</td>
      <td>{{item.address}}</td>
      <td><router-link :to="{ name: 'Update'}">Update</router-link></td>
      <td><button @click="delete1(item.id)">Delete</button></td>
       <!-- <td><router-link :to="`/update/{$item.id}`">Update</router-link></td> -->
     <!-- <td><button @click="change(item.id)">Update</button></td> -->
      


    </tr>
  </table>
</template>

<script>
import Header from "./Header.vue"
import axios  from "axios";
// export default {
// name:'Home',
// methods:{
//     redirect(){
//       this.$router.push({name:"Home"})
//     },
// }
export default {
  name: 'Home',
  data(){
    return{
      restaurant:[]
    }
  },
  components:{
    Header},
  methods: {
    // back() {
    //   this.$router.push({ name: 'Sign_Up' });
    // },
    // login(){
    //   this.$router.push({name:'Login'})
    // }
    delete1(id) {
      // Find the index of the item with the specified id
      const index = this.restaurant.findIndex((item )=> item.id == id);

      // If the item is found, remove it from the array
      if (index !== -1) {
        this.restaurant.splice(index, 1);
      }

      //update the order of id after the delete item
      this.updateIds();
},
updateIds() {

      // Update IDs based on the current order in the array

      this.restaurant.forEach((item, index) => {
        item.id = index + 1;
      });
  }
  },
  async mounted(){
    let user=localStorage.getItem('user-info')

    // if there is no user they push to sign up page
      if(!user){
        this.$router.push({name:"Sign_Up"})
       
      }
      else{
    let res= await axios.get("http://localhost:3000/restaurant")
     this.restaurant=res.data
      }
    },
   
    
}

</script>

<style>

/* .blue-button1 {
  background-color: blue;
  color: white;
 
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
} */

.t1{
  color: blue;
}
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.styled-table th, .styled-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.styled-table th {
  background-color: #f2f2f2;
}
</style>