<template>
  <div id="home" class="pb-3">
    <HomeCarousel />
    <div class="container p-2">
      <h1><b-icon icon="house-fill"></b-icon> HOME</h1>
      <h2>{{ mensagemdohomecontroller }}</h2>

      <b-card class="myCard m-2" text-variant="dark" title="Gráficos">
        <b-card-text>
          Caso seja um usuário, veja os gráficos sobre nossa pesquisa realacionada a COVID-19 desenvolvida através de amostras!
        </b-card-text>
            <router-link to="/graphic" class="btn btn-primary">
              Gráficos <b-icon icon="arrow-right-circle-fill"></b-icon>
            </router-link>
      </b-card>

      <b-card class="myCard m-2" text-variant="dark" title="Usuários">
        <b-card-text>
          Caso seja administrador, controle os usuários do sistema.
        </b-card-text>
            <router-link to="/user" class="btn btn-primary">
              Users <b-icon icon="arrow-right-circle-fill"></b-icon>
            </router-link>
      </b-card>

      <b-card class="myCard m-2" text-variant="dark" title="Sobre Nós">
        <b-card-text>
          Para mais informações sobre nós, visite nossa documentação ou entre em contato com os desenvolvedores.
        </b-card-text>
            <router-link to="/about" class="btn btn-primary">
              Sobre <b-icon icon="arrow-right-circle-fill"></b-icon>
            </router-link>
      </b-card>

      <b-card-group deck>

        <b-card class="myCard" title="SUS" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"></h6>
          </template>
          <b-card-text>Informações gerais e relevantes no site oficial do Sistema Único de Saúde</b-card-text>
          <b-button href="https://www.saude.mg.gov.br/sus" variant="success">SUS <b-icon icon="arrow-right-circle-fill"></b-icon></b-button>
          <template #footer>
            <em></em>
          </template>
        </b-card>

        <b-card class="myCard" title="DATASUS" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"></h6>
          </template>
          <b-card-text>Informações sobre a utilização dos dados da API do SUS referentes ao corano virus.</b-card-text>
          <b-button href="https://datasus.saude.gov.br/" variant="success">DATA SUS <b-icon icon="arrow-right-circle-fill"></b-icon></b-button>
          <template #footer>
            <em></em>
          </template>
        </b-card>
      </b-card-group>


    </div>

  </div>
</template>

<script>
import HomeCarousel from "../components/home_carousel";

export default {
  name: "Home",
  components: {
    HomeCarousel
  },
  data() {
    return {
      mensagemdohomecontroller: "",
    };
  },
  mounted() {
    fetch("http://localhost:8085")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.mensagemdohomecontroller = data;
      });
  },
};
</script>

<style scoped>
#home {
  background: linear-gradient(
    to right,
    rgba(143, 238, 171, 0.5),
    rgba(143, 200, 238, 0.5)
  );
}

.myCard{
  background-color: rgba(143, 200, 238, 0.5);;
}
</style>
