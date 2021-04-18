<template>
  <div id="pie" class="row container m-auto ">

    <div class="col-lg-4 col-md-12 m-0 p-0">
    <GChart      
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
      style="height: 300px;"
    />
    </div>

    <div class="col-lg-4 col-md-12 m-0 p-0">
    <GChart      
      type="PieChart"
      :data="chartData2"
      :options="chartOptions"
      style="height: 300px;"
    />
    </div>

    <div class="col-lg-4 col-md-12 m-0 p-0">
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
      crawler: [],
      
      

      instructor: "crawler",

      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["ID", "Temperature"],
        ["a", 80],
        ["b", 10],
        ["c", 10],
        ["d", 7],
        ["e", 8]
      ],
      chartData2: [
        ["ID", "Temperature"],
        ["za", 80],
        ["zb", 79],
        ["zc", 78],
        ["d", 72],
        ["e", 68]
      ],
      chartData3: [
        ["ID", "Temperature"],
        ["za", 200],
        ["zb", 150],
        ["ezc", 100],
        ["ed", 50],
        ["ee", 25]
      ],


      chartOptions: {
        // colorAxis: { colors: ["yellow", "red"] }
      }
    }
  },

  computed() {

  },

  methods: {
    //carregamento dos dados do crawler:
    crawlerData() {
      CrawlerService.retriveAllData(this.instructor)
        .then(response => {
          this.crawler = response.data;
          
        });
    },

    onChartReady (chart, google) {
      this.chartsLib = google
    }
  },
  
  created() {
      this.crawlerData();
  },


 
};
</script>