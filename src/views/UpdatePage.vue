<template>
  <div>
    <NavBar />
    <div class="container mt-3">
      <div class="row justify-content-center align-items-center">
        <h1>Hello {{ name }}, Welcome on Update Page</h1>
        <div class="col-6 mt-5">
          <input
            type="text"
            class="form-control my-4"
            placeholder="Enter name"
            v-model="restaurant.name"
          />
          <input
            type="text"
            class="form-control my-4"
            placeholder="Enter contact"
            v-model="restaurant.contact"
          />
          <input
            type="text"
            class="form-control my-4"
            placeholder="Enter address"
            v-model="restaurant.address"
          />
          <button class="btn btn-primary" @click="updateRestaurant">
            Update Restaurant
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  name: "UpdatePage",
  components: { NavBar },
  data: () => ({
    name: "",
    restaurant: {
      name: "",
      contact: "",
      address: "",
    },
  }),
  methods: {
    async updateRestaurant() {
      let result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          contact: this.restaurant.contact,
          address: this.restaurant.address,
        }
      );

      if (result.status === 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    let usernames = JSON.parse(user);
    if (Array.isArray(usernames)) {
      usernames.forEach((username) => {
        this.name = username.name;
      });
    } else {
      this.name = usernames.name;
    }
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    const result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    this.restaurant = result.data;
  },
};
</script>