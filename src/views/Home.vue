<template>
  <div id="home" class="pb-3">
    <h1>HOME</h1>
    <h2>{{ mensagemdohomecontroller }}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      mensagemdohomecontroller: "",
    };
  },
  mounted() {
    fetch("http://localhost:8085")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.mensagemdohomecontroller = data;
      });
  },
};
</script>

<style scoped>
#home {
  background: linear-gradient(to right, rgba(143, 238, 171, 0.5), rgba(143, 200, 238, 0.5));
}
</style>
