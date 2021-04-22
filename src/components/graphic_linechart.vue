<script>
import { Line } from "vue-chartjs";

export default {
    extends: Line,

    props: {
        label: {
            type: String 
        },

        chartData: {
            type: Array
        },

        options: {
            type: Object
        },
    },

    mounted() {
        // const data = this.chartData.map(d => d.data).reverse();
        // const totals = this.chartData.map(d => d.total).reverse();

        // this.renderChart(
        // {
        //     labels: dates,
        //     datasets: [{
        //         label: this.label,
        //         data: this.totals,
        //     }]
        // },
        // this.options
        // );
    }


}
</script>