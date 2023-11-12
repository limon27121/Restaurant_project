<!-- <template>
    <Header/>
   <h1>welcome to Update restaurant page</h1>
</template>

<script>
import Header from "./Header.vue"
export default {
name:"Update",
components:{
  Header
}
}
</script>

<style>

</style> -->


<template>
    <div>
        <!-- <Header/> -->
      <h1>welcome to list of restaurant</h1>
  
      <!-- Display the received form data -->
      <div v-if="restaurantData">
        <!-- <h2>Received Form Values</h2> -->
        <p>Restaurant Name: {{ restaurantData.name }}</p>
        <p>Address: {{ restaurantData.address }}</p>
        <p>Contact: {{ restaurantData.contact }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import Add from "./Add.vue";
//   import Header from "./Header.vue"
  export default {
    name: "Update",
    components: {
      Add,
    //   Header
    },
    props: {
      restaurantData: Object, // Define the prop type
    },
  };
  </script>
  