<template>
  <div id="graphic" class="pb-3">
    <h1>GRAPHIC</h1>
    <GraphicTest />
  </div>
</template>

<script>
import GraphicTest from '../components/graphic_test';

export default {
  name:"Graphic",
  components: {
    GraphicTest,
  },
  
}
</script>

<style scoped>
#graphic {
  background: linear-gradient(to right, rgba(143, 238, 171, 0.5), rgba(143, 200, 238, 0.5));
}
</style>
