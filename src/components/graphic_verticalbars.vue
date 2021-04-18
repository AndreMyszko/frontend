<template>
  <div id="verticalbars" class="container mt-3">
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
  
  name:"GraphicVerticalBars",

  components:{
    GChart
  },
  

  data () {
    return {
      //ATRIBUTOS DO CRAWLER:
      crawler: [],
      instructor: "crawler",

      //GRÁFICO DO GOOGLE:
      chartsLib: null,
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Mês', 'Casos', 'Recuperados', 'Mortes'],
        ['Janeiro', 20000, 15000, 2000],
        ['Fevereiro', 23000, 16000, 2500],
        ['Março', 19000, 13000, 3000],
        ['Abril', 19800, 13800, 3500]
      ],
    }
  },

  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Análise Geral - Amostra Mensal',
          subtitle: 'Casos, Recuperadose e Mortes: Janeiro - Abril'
        },
        bars: 'vertical', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 500,
        colors: ['blue', 'green', 'red']      
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

    //carregamento do gráfico:
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  },

  created() {
      this.crawlerData();
  },



}
</script>