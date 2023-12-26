<template>
  <div>
    <Header />
    <h1>Welcome To Update Page</h1>
    <form @submit.prevent="submitForm" class="restaurant-form">
      <label for="rname">Restaurant Name:</label>
      <input
        type="text"
        id="rname"
        name="rname"
        placeholder="Enter restaurant name"
        v-model="restaurant.name"
        required
      />

      <label for="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Enter address"
        v-model="restaurant.address"
        required
      />

      <label for="contact">Contact:</label>
      <input
        type="text"
        id="contact"
        name="contact"
        placeholder="Enter contact number"
        v-model="restaurant.contact"
        required
      />

      <input type="submit" value="Update" @click="updateRestaurant" />
    </form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";

export default {
  name: "Update1",
  props:"id",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      try {
        let res = await axios.put(
          `http://localhost:3000/restaurant/${this.$route.params.id}`,
          this.restaurant
        );

        if (res.status === 200) {
          this.$router.push({ name: "home" });
        }
      } catch (error) {
        console.error("Error updating restaurant:", error);
      }
    },
  },
  // async mounted() {
  //   let user = localStorage.getItem("user-info");

  //   if (!user) {
  //     this.$router.push({ name: "Sign_Up" });
  //   }

  //   try {
  //     let result = await axios.get(
  //       "http://localhost:3000/restaurant/" + this.$route.params.id
  //     );

  //     this.restaurant = result.data;
  //   } catch (error) {
  //     console.error("Error fetching restaurant data:", error);
  //   }
  // },
};
</script>

<style>
/* Your styles remain unchanged */
</style>
