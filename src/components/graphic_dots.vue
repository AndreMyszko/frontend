<template>
  <div id="pie" class="row container m-auto ">

    <div class="col-lg-4 col-md-12 m-0 p-0 bg-light">
    <h3>Curitiba - 16/04/2021</h3>
    <input type="hidden" value="crawler.data" id="idteste">
    <input type="hidden" v-for="c in cityFilter" v-bind:key="c.id">
    <GChart      
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
      style="height: 300px;"
    />
    </div>

    <div class="col-lg-4 col-md-12 m-0 p-0 bg-light">
    <h3>Curitiba - 18/04/2021</h3>
    <GChart      
      type="PieChart"
      :data="chartData2"
      :options="chartOptions"
      style="height: 300px;"
    />
    </div>

    <div class="col-lg-4 col-md-12 m-0 p-0 bg-light">
    <h3>Curitiba - 19/04/2021</h3>
    <GChart      
      type="PieChart"
      :data="chartData3"
      :options="chartOptions"
      style="height: 300px;"
    />
    </div>

  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import CrawlerService from '../service/crawler_service';

export default {
  name: "GraphicPie",
  components: {
    GChart
  },
  data() {
    return {
      instructor: "crawler",
      crawler: [],

      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Status", "100k habitantes"],
        ["Casos", 143479],
        ["Obitos", 3956]
      ],
      chartData2: [
        ["Status", "100k habitantes"],
        ["Casos", 143824],
        ["Obitos", 3972]
      ],
      chartData3: [
        ["Status", "100k habitantes"],
        ["Casos", 144150],
        ["Obitos", 3978]
      ],


      chartOptions: {
        // colorAxis: { colors: ["yellow", "red"] }
      }
    }
  },

  computed: {

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

    // data.forEach(c => {
    //   const data = c.data;
    //   const{
    //     confirmado,
    //     obito 
    //   } = c;
    // })
    // this.data.push({data, total: confirmado});
    // this.data.push({data, total: obito});

  },
};
</script>