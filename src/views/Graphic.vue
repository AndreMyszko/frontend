<template>
  <div id="graphic" class="pb-3">
    <h1><b-icon icon="graph-up"></b-icon> GRAPHIC</h1>
    <!-- <GraphicVerticalBar />   -->
    <GraphicHorizontalBars />
    <GraphicDots />
    <!-- <GraphicSingleBar /> -->

    <h1><b-icon icon="table"></b-icon> TABLE</h1>
    <div class="container card mt-2">
      <div class="col-md-6">
        <h3 class="float-left"><b-icon icon="search"></b-icon>...</h3>
        <input id="search" class="float-left" type="text" placeholder="search for City..." v-model="search"/>
      </div>

      <h3>Tabela Completa das Amostras</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Cidade</th>
            <th>Casos</th> 
            <th>Obitos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in crawler" v-bind:key="c.id" class="">
            <td>{{c.data}}</td>
            <td>{{c.cidade}}</td>
            <td>{{c.confirmado}}</td>
            <td>{{c.obito}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h1><b-icon icon="journal-text"></b-icon> JSON</h1>
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
      search: "",
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
      this.cityFilter();
  },

  computed:{
    cityFilter() {
      return this.crawler.filter((crawler) => {
          return crawler.cidade.match(this.search);
      });
    }
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
