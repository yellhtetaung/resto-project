<template>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-6">
        <img src="../assets/logo.png" width="100" alt="logo" />
        <h1 class="fw-bold mt-3">Sign Up</h1>
        <div class="form-group my-5">
          <input
            type="text"
            class="form-control my-4"
            placeholder="Enter Name"
            v-model="name"
          />
          <input
            type="email"
            class="form-control my-4"
            placeholder="Enter Email"
            v-model="email"
          />
          <input
            type="password"
            class="form-control"
            placeholder="Enter Password"
            v-model="password"
          />
        </div>
        <button class="btn btn-success mx-2" @click="signUp">Sign Up</button>
        <router-link to="/login" class="btn btn-warning mx-2"
          >Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignupPage",
  data: () => ({
    name: "",
    email: "",
    password: "",
  }),
  methods: {
    async signUp() {
      if (this.name === "") {
        return alert("Require name");
      } else if (this.email === "") {
        return alert("Require email");
      } else if (this.password === "") {
        return alert("Require password");
      } else {
        let result = await axios.post("http://localhost:3000/user", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>