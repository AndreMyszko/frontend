<template>
  <div id="horizontalbars" class="container">
  <GChart
    :settings="{packages: ['bar']}"    
    :data="chartData"
    :options="chartOptions"
    :createChart="(el, google) => new google.charts.Bar(el)"
    @ready="onChartReady"
  />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import CrawlerService from '../service/crawler_service';

export default {

  name: 'GraphicHorizontalBars',
  
  components: {
    GChart
  },

  data () {
    return {
      crawler: [],
      instructor: "crawler",

      chartsLib: null, 
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Dias', 'Casos', 'Recuperados', 'Mortes'],
        ['01/01/2021', 10000, 5000, 200],
        ['01/02/2021', 11700, 4600, 250],
        ['01/03/2021', 11600, 5120, 300],
        ['01/04/2021', 10300, 5040, 350]
      ],
    }
  },

  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Análise Geral - Amostra Diária',
          subtitle: 'Casos, Recuperados, e Mortes: 01/01/2021 - 01/04/2021',
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 500,
        //colors: ['blue', 'green', 'red']
      })
    }
  },

  methods: {
    //carregamento dos dados do crawler:
    crawlerData() {
      CrawlerService.retriveAllData(this.instructor)
        .then(response => {
          this.crawler = response.data;
          console.log(response.data);
        });
    },

    onChartReady (chart, google) {
      this.chartsLib = google
    }
  },
  
  created() {
      this.crawlerData();
  },

  
}
</script>