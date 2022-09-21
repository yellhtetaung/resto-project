<template>
  <div>
    <NavBar />
    <div class="container mt-3">
      <div class="row justify-content-center align-items-center">
        <h1>Hello {{ name }}, Welcome on Home Page</h1>
        <div class="col-6 mt-5">
          <table class="table table-bodered border-primary">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in restaurant" :key="item">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.address }}</td>
                <td>
                  <router-link
                    :to="'/update/' + item.id"
                    class="btn btn-warning btn-sm mx-1"
                    >Update</router-link
                  >
                  <button
                    class="btn btn-danger btn-sm mx-1"
                    @click="deleteRestaurant(item.id)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: { NavBar },
  data: () => ({
    name: "",
    restaurant: [],
  }),
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      if (result.status === 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      let usernames = JSON.parse(user);
      if (Array.isArray(usernames)) {
        usernames.forEach((username) => {
          this.name = username.name;
        });
      } else {
        this.name = usernames.name;
      }

      let resut = await axios.get("http://localhost:3000/restaurant");
      this.restaurant = resut.data;
    },
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    this.loadData();
  },
};
</script>