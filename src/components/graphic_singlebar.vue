<template>
  <div id="singlebar" class="container mt-3 mb-3">
    <GChart 
      type="ColumnChart" 
      :data="chartData" 
      :options="chartOptions"
      style="height: 500px;"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
  
  name:"GraphicSigleBar",

  components:{
    GChart
  },
  
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales'],
        ['2014', 1000],
        ['2015', 1170],
        ['2016', 660],
        ['2017', 1030]
      ],
      chartOptions: {
        chart: {
          title: 'Covid-19',
          subtitle: 'Sales: 2014-2017',
        }
      }
    }
  }
}
</script>