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
      instructor: "crawler",
      crawler: [],
      obitos_val: 0,
      casos_val: 0,
      data_val: "",

      chartsLib: null, 
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Dias', 'Casos', 'Mortes'],
        ['16/04/2021', 143479, 3956],
        ['18/04/2021', 143479, 3956],
        ['20/03/2021', 143479, 3956],
      ],
    }
  },

  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Amostras - Curitiba',
          subtitle: 'Casos, Recuperados, e Mortes: 16/04/2021 - 22/04/2021',
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