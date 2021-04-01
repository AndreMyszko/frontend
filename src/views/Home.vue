<template>
  <div class="home">
    <h1>HOME</h1>
    <h2>{{ mensagemdohomecontroller }}</h2>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
  data(){
    return {
      mensagemdohomecontroller : ''
    }
  },
  mounted(){
    fetch('http://localhost:8085')
      .then(response => {
        return response.text();
      })
      .then(data => {
        this.mensagemdohomecontroller = data;
      });
  }
};
</script>
