<template>
 <div class="navbar1">
    <div class="logo1">
        <img alt="navlogo" src="../assets/nav1.png">
      
    <div class="nav-links1">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'Add' }">Add Restaurant</router-link>
        <router-link :to="{ name: 'Update' }"> Update Restaurant List</router-link>
        <!-- <a @click="home" href="#">Home</a>
       
        <a href="">Add Restaurant</a>
        <a href="#">Update Restaurant</a> -->
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
        // this.$router.push({name:"Login"})
        // console.log("done")
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