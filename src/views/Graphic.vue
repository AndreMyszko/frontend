<template>
  <div id="graphic" class="pb-3">
    <h1><b-icon icon="graph-up"></b-icon> GRAPHIC</h1>
    <!-- <div class="row p-0 m-0">
      <div class="col-md-8">
      </div>
      <div class="col-md-4"> -->
       <GraphicVerticalBar />  
      <!-- </div>
    </div>
    <div class='row p-0 m-0'>
      <div class="col-md-4"> -->
        <GraphicHorizontalBars />
      <!-- </div>
      <div class="col-md-4"> -->
        <GraphicSingleBar />
      <!-- </div>
      <div class="col-md-4">-->
        <GraphicDots />
      <!--</div>
    </div> -->
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
