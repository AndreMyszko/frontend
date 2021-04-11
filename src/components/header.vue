<template>
  <div id="nav">
    <b-nav tabs align="center">
      <h3> - CRAWLER WEB API - </h3>
      <b-nav-item>
        |
        <router-link to="/"
          ><b-icon icon="house-fill"></b-icon> Home</router-link
        >
        |
      </b-nav-item>
      <b-nav-item>
        |
        <router-link to="/graphic"
          ><b-icon icon="graph-up"></b-icon> Graphic</router-link
        >
        |
      </b-nav-item>
      <b-nav-item>
        |
        <router-link to="/user"
          ><b-icon icon="person-fill"></b-icon> User</router-link
        >
        |
      </b-nav-item>
      <b-nav-item>
        |
        <router-link to="/about"
          ><b-icon icon="info-circle-fill"></b-icon> About</router-link
        >
        |
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style scoped>
#nav {
  background: linear-gradient(
    to right,
    rgba(77, 184, 255, 0.5),
    rgba(91, 255, 140, 0.5)
  );
}
</style>
