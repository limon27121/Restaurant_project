
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
    

      <td><router-link :to="{name: 'Update1', params: { id: item.id }}">Update</router-link></td>

      <td><button @click="delete1(item.id)">Delete</button></td>


      


    </tr>
  </table>
</template>

<script>
import Header from "@/components/Header.vue"
import axios  from "axios";


export default {
  data() {
    return {
      restaurant: []
    };
  },
  components:{
    Header
  },
  mounted:{
     
  },
  methods: {
    async delete1(id) {
      let result = await axios.delete(`http://localhost:3000/restaurant/${id}`);

      if (result.status === 200) {
        await this.load_data();
      }
    },
    async load_data() {
      let user = localStorage.getItem('user-info');

      if (!user) {
        this.$router.push({ name: "Sign_Up" });
      } else {
        let res = await axios.get("http://localhost:3000/restaurant");
        this.restaurant = res.data;

        // Update the ids based on the order of items in the current data
        this.restaurant.forEach((item, index) => {
          item.id = index + 1;
        });
      }
    }
  },
  async mounted() {
    await this.load_data();
  }
};
</script>

<style>

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