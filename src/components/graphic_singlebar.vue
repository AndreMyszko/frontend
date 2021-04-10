<template>
  <div id="singlebar" class="container mt-3 mb-3">
    <GChart
      :settings="{packages: ['bar']}"    
      :data="chartData" 
      :options="chartOptions"
      :createChart="(el, google) => new google.charts.Bar(el)"
      @ready="onChartReady"
      style="height:500px;"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
  
  name:"GraphicSingleBar",

  components:{
    GChart
  },
  
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Cidade', 'Mortes'],
        ['Cidade_1', 10000],
        ['Cidade_2', 9000],
        ['Cidade_3', 8000],
        ['Cidade_4', 7900],
        ['Cidade_5', 7770],
        ['Cidade_6', 7600],
        ['Cidade_7', 6000],
        ['Cidade_8', 5670],
        ['Cidade_9', 5560],
        ['Cidade_10', 5103]
      ],
    }
  },

  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'TOP 10 - Cidades mais Afetadas',
          subtitle: 'Cidades e Letalidade',
        },
      })  
    }
  },

  methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  },

}
</script>