<template>
 <div class="navbar1">
    <div class="logo1">
        <img alt="navlogo" src="../assets/nav1.png">
      
    <div class="nav-links1">

        <!-- route to link go to one page to another page or components -->

        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'Add' }">Add Restaurant</router-link>
        <router-link :to="{ name: 'Update' }"> Update Restaurant List</router-link>

        <!-- add a method with event using  -->
        
        <!-- <router-link :to="{ name: 'Update' }" @click="updateRestaurantList">Update Restaurant List</router-link> -->

        <a @click="logout()" href="#">Logout</a>
    </div>
</div>
</div>
</template>

<script>
export default {
  name:"Header",
  methods:{
    logout(){
       //go to log out page and clear the local storage

        localStorage.clear()
        
        this.$router.push({name:"Login"});

    },
  }
}
</script>

<style>
.navbar1 {
    background-color: #333;
    overflow: hidden;
    height: 120px;
}

.navbar1 a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.navbar1 a:hover {
    background-color: #ddd;
    color: black;
}

.logo1 {
    float: left;
    font-size: 30px;
    color: white;
    padding: 14px 16px;
}

.logo1-img {
    
    margin-right: 10px; /* Add margin to separate the logo from text */
    height: 10px;
    width: 10px;
}

.nav-links1 {
    float: right;
}

</style>