<template>
  <div id="sobre_devs">
    <div class="container pb-3">
      <b-card id="cardDev" title="Desenvolvedores">
        <b-card-text>
          Aqui são apresentados os desenvolvedores envolvidos neste projeto,
          assim como suas informações, como habilidades e contatos:
        </b-card-text>
        <b-nav tabs align="center">
          <div>
            <b-img
              class="devImg ml-2 mr-2"
              :src="require('../assets/devs/dev_andre.jpg')"
              rounded="circle"
              alt="dev_andre"
            ></b-img>
            <h5 class="mb-0">André Myszko</h5>
            <hr class="mt-0 mb-0 ml-2 mr-2" />
            <p>Eng. de Software</p>
          </div>
          <div>
            <b-img
              class="devImg ml-2 mr-2"
              :src="require('../assets/devs/dev_jose.jpg')"
              rounded="circle"
              alt="dev_jose"
            ></b-img>
            <h5 class="mb-0">José Trugilio</h5>
            <hr class="mt-0 mb-0 ml-2 mr-2" />
            <p>Eng. de Software</p>
          </div>
          <div>
            <b-img
              class="devImg ml-2 mr-2"
              :src="require('../assets/devs/dev_greici.jpg')"
              rounded="circle"
              alt="dev_greici"
            ></b-img>
            <h5 class="mb-0">Greici Evani</h5>
            <hr class="mt-0 mb-0 ml-2 mr-2" />
            <p>Eng. de Software</p>
          </div>
          <div>
            <b-img
              class="devImg ml-2 mr-2"
              :src="require('../assets/devs/dev_david.jpg')"
              rounded="circle"
              alt="dev_david"
            ></b-img>
            <h5 class="mb-0">David Caron</h5>
            <hr class="mt-0 mb-0 ml-2 mr-2" />
            <p>Eng. de Software</p>
          </div>
        </b-nav>
        <b-card-text class="mt-3"
          >Mais algumas informações sobre nossa comunidade através dos
          links:</b-card-text
        >
        <b-link href="#" class="card-link">>Discord</b-link>
        <b-link href="#" class="card-link">>Github</b-link>
        <b-link href="#" class="card-link">>Whatsapp</b-link>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "SobreDevs",
  components: {},
};
</script>

<style scoped>
.devImg {
  width: 150px;
  height: 150px;
  border-style: solid;
}
#cardDev {
  background-color: rgba(143, 238, 171, 0.5);
}
</style>
