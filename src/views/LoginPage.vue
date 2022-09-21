<template>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-6">
        <img src="../assets/logo.png" width="100" alt="logo" />
        <h1 class="fw-bold">Login</h1>
        <div class="form-group my-5">
          <input
            type="email"
            class="form-control my-4"
            placeholder="Enter Email"
            v-model="email"
          />
          <input
            type="password"
            class="form-control my-4"
            placeholder="Enter Password"
            v-model="password"
          />
        </div>
        <button class="btn btn-success mx-2" @click="login">Login</button>
        <router-link to="/signup" class="btn btn-warning mx-2"
          >Sign Up</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    async login() {
      if (this.email === "") {
        return alert("Require email");
      } else if (this.password === "") {
        return alert("Required password");
      } else {
        let result = await axios.get(
          `http://localhost:3000/user?emal=${this.email}&password=${this.password}`
        );

        if (result.status === 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
};
</script>