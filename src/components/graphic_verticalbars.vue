<template>
  <div id="verticalbars" class="container mt-3 mb-3">
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
  
  name:"GraphicVerticalBars",

  components:{
    GChart
  },
  
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Covid-19',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  }
}
</script>