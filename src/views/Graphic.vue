<template>
  <div id="graphic" class="pb-3">
    <h1>GRAPHIC</h1>
    <GraphicSingleBar />
    <GraphicVerticalBar /> 
    <GraphicHorizontalBars />
    <GraphicDots />
  </div>
</template>

<script>
import GraphicHorizontalBars from "../components/graphic_horizontalbars";
import GraphicVerticalBar from "../components/graphic_verticalbars";
import GraphicSingleBar from "../components/graphic_singlebar";
import GraphicDots from "../components/graphic_dots";

export default {
  name: "Graphic",
  components: {
    GraphicHorizontalBars,
    GraphicVerticalBar,
    GraphicSingleBar,
    GraphicDots,
  },
};
</script>

<style scoped>
#graphic {
  background: linear-gradient(
    to right,
    rgba(143, 238, 171, 0.5),
    rgba(143, 200, 238, 0.5)
  );
}
</style>
