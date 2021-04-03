<template>
  <div id="nav">
    <b-nav tabs align="center">
      <b-nav-item>
        | <router-link to="/">Home</router-link> |
      </b-nav-item>  
      <b-nav-item>
        | <router-link to="/graphic">Graphic</router-link> |
      </b-nav-item>
      <b-nav-item>
        | <router-link to="/user">User</router-link> |
      </b-nav-item>
      <b-nav-item>
        | <router-link to="/about">About</router-link> |
      </b-nav-item>  
    </b-nav>
  </div>
</template>

<script>

export default {
  name: "Header",
  components: {
  },
};
</script>
 
 
 
 
