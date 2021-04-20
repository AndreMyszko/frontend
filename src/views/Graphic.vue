<template>
  <div id="graphic" class="pb-3">
    <h1><b-icon icon="graph-up"></b-icon> GRAPHIC</h1>
        <!-- <div class="inline m-auto col-sm-10 col-md-10">
          <b-form-input v-model="text" placeholder="Entre com o nome da cidade"></b-form-input>
        </div>
        <br> -->
        
        <!-- <GraphicVerticalBar />   -->
        <GraphicHorizontalBars />
        <GraphicDots />
    <!-- <div class="row p-0 m-0">
      <div class="col-md-8">
      </div>
      <div class="col-md-4"> -->
      <!-- </div>
    </div>
    <div class='row p-0 m-0'>
      <div class="col-md-4"> -->
        
      <!-- </div>
      <div class="col-md-4"> -->
        <!-- <GraphicSingleBar /> -->
      <!-- </div>
      <div class="col-md-4">-->
      <!--</div>
    </div> -->
    <br>
    <div id="json" class="col-sm-10 col-md-10 card m-auto">
      <h3>Json Data:</h3>
      {{crawler}}
    </div> 
  </div>
</template>

<script>
import GraphicHorizontalBars from "../components/graphic_horizontalbars";
// import GraphicVerticalBar from "../components/graphic_verticalbars";
// import GraphicSingleBar from "../components/graphic_singlebar";
import GraphicDots from "../components/graphic_dots";
import CrawlerService from '../service/crawler_service';

export default {
  name: "Graphic",
  components: {
    GraphicHorizontalBars,
    // GraphicVerticalBar,
    // GraphicSingleBar,
    GraphicDots,
  },

  data() {
    return {
      crawler: [],
      text: ""
    }
  },

  methods: {
  //carregamento dos dados do crawler:
  crawlerData() {
    CrawlerService.retriveAllData(this.instructor)
      .then(response => {
        this.crawler = response.data;
        
      });
    },
  },

  created() {
      this.crawlerData();
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
#json{
  color: greenyellow;
  background-color: black;
}
</style>
