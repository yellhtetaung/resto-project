<template>
  <div>
    <nav class="navbar navbar-expand bg-dark navbar-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item mx-3">
            <router-link to="/" href="#" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item mx-3">
            <router-link to="/add" href="#" class="nav-link"
              >Add Restaurant</router-link
            >
          </li>

          <li class="nav-item mx-3">
            <router-link to="/login" href="#" class="nav-link"
              >Logout</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>