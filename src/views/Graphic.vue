<template>
  <div id="graphic" class="pb-3">

    <h1><b-icon icon="graph-up"></b-icon> GRAPHIC</h1>
    <!-- <GraphicVerticalBar />   -->
    <GraphicHorizontalBars />
    <GraphicDots />
    <!-- <GraphicSingleBar /> -->
    
    <div class="container card mt-2">
      <div class="col-md-12">

      <div class="row mt-2 mb-2">
          <h3 class="float-left ml-2 mr-1"><b-icon icon="search"></b-icon>...</h3>
          <input id="search" class="float-left" type="text" placeholder="search for City..." v-model="search"/>
          <b-button class="ml-2" v-b-toggle.collapse-1 variant="primary"><b-icon icon="table"></b-icon> Tabela</b-button>
          <b-button class="ml-2" v-b-toggle.collapse-2 variant="dark"><b-icon icon="journal-text"></b-icon> JSON</b-button>
      </div>

      <div>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <h1><b-icon icon="table"></b-icon> TABLE</h1>
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
                <tr v-for="c in cityFilter" v-bind:key="c.id">
                  <td>{{c.data}}</td>
                  <td>{{c.cidade}}</td>
                  <td>{{c.confirmado}}</td>
                  <td>{{c.obito}}</td>
                </tr>
              </tbody>
            </table>
          </b-card>
        </b-collapse>
      </div>

      <div>
        <b-collapse id="collapse-2" class="mt-2">
          <b-card>
            <h1><b-icon icon="journal-text"></b-icon> JSON</h1>
            <div id="json" class="card m-auto">
              <div v-for="c in cityFilter" v-bind:key="c.id">
                {{c}}
              </div>
            </div> 
          </b-card>
        </b-collapse>
      </div>

    </div>

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
    GraphicDots
  },

  data() {
    return {
      crawler: [],
      search: "",
    };
  },

  computed:{
    cityFilter() {
      return this.crawler.filter((c) => {
        return c.cidade.match(this.search);
      });
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
#search{
  background-color: black;
  border: 3px solid greenyellow;
  border-radius: 5px;
  color: greenyellow;
}

</style>
