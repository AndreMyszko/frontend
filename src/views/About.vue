<template>
  <div id="about">
    <h1><b-icon icon="info-circle-fill"></b-icon> SOBRE</h1>
    <SobreProjeto />
    <SobreDev />
  </div>
</template>

<script>
import SobreDev from "../components/sobre_devs";
import SobreProjeto from "../components/sobre_projeto";

export default {
  name: "About",
  components: {
    SobreDev,
    SobreProjeto,
  },
};
</script>

<style scoped>
#about {
  background: linear-gradient(
    to right,
    rgba(143, 238, 171, 0.5),
    rgba(143, 200, 238, 0.5)
  );
}
</style>
