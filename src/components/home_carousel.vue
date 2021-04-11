<template>
  <div>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide class="slide" img-src="https://www.sheilds.org/wp-content/uploads/2020/03/output-onlinepngtools-3-1.png">
        <h1>Cuidado com o Corona</h1>
      </b-carousel-slide>

      <b-carousel-slide class="slide" img-src="https://img.ibxk.com.br/2019/04/11/11173247124498.jpg?w=1120&h=420&mode=crop&scale=both">
        <h1 >Vida longa ao SUS</h1>
      </b-carousel-slide>

      <b-carousel-slide class="slide" img-src="https://usm.maine.edu/sites/default/files/healthy-huskies/PageHeader_Coronavirus.jpg">
        <h1>Use Máscara</h1>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
  export default {
    name: "HomeCarousel",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.slide{
  height: 300px;
}
.carouselStuff{
  background-color: rgba(143, 200, 238, 0.5);
}
</style>