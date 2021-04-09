<template>
  <div id="dots" class="container mt-3 mb-3">
    <GChart      
      type="BubbleChart"
      :data="chartData"
      :options="chartOptions"
      style="height: 500px;"
    />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "GraphicDots",
  components: {
    GChart
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["ID", "X", "Y", "Temperature"],
        ["", 80, 167, 120],
        ["", 79, 136, 130],
        ["", 78, 184, 50],
        ["", 72, 278, 230],
        ["", 81, 200, 210],
        ["", 72, 170, 100],
        ["", 68, 477, 80]
      ],
      chartOptions: {
        colorAxis: { colors: ["yellow", "red"] }
      }
    };
  }
};
</script>