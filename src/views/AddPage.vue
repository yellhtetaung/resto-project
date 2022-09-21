<template>
  <div>
    <NavBar />
    <div class="container mt-3">
      <div class="row justify-content-center align-items-center">
        <h1>Hello {{ name }}, Welcome on Add Page</h1>
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
          <button class="btn btn-primary my-3" @click="add">
            Add Restaurant
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
  name: "AddPage",
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
    async add() {
      let result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        contact: this.restaurant.contact,
        address: this.restaurant.address,
      });

      if (result.status === 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
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
  },
};
</script>