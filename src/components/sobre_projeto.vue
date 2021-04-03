<template>
  <div id="sobre_projeto">
    <div class="container mb-3">
      <b-card id="cardTec" title="Projeto e Tecnologias">
        <b-card-text>
          Todas as informações disponíveis, como a documentação e tecnologias utilizadas para o desenvolvimento deste projeto estão apresentados abaixo:
        </b-card-text>
        <b-nav tabs align="center">
          <div>
            <b-img
              class="devImg ml-2 mr-2 mb-3" :src="require('../assets/tecnologies/logo_vue.png')" alt="dev_logo"></b-img>
          </div>
          <div>
            <b-img class="devImg ml-2 mr-2 mb-3" :src="require('../assets/tecnologies/logo_bootstrapvue.png')" alt="dev_logo"></b-img>
          </div>
          <div>
            <b-img class="devImg ml-2 mr-2 mb-3" :src="require('../assets/tecnologies/logo_mysql.png')" alt="dev_logo"></b-img>
          </div>
          <div>
            <b-img class="devImg ml-2 mr-2 mb-3" :src="require('../assets/tecnologies/logo_java.png')" alt="dev_logo"></b-img>
          </div>
          <div>
            <b-img class="devImg ml-2 mr-2 mb-3" :src="require('../assets/tecnologies/logo_springboot.png')" alt="dev_logo"></b-img>
          </div>
          <div>
            <b-img class="devImg ml-2 mr-2 mb-3" :src="require('../assets/tecnologies/logo_tomcat.png')" alt="dev_logo"></b-img>
          </div>
          <div>
            <b-img class="devImg ml-2 mr-2 mb-3" :src="require('../assets/tecnologies/logo_maven.png')" alt="dev_logo"></b-img>
          </div>
          <div>
            <b-img class="devImg ml-2 mr-2 mb-3" :src="require('../assets/tecnologies/logo_docker.svg')" alt="dev_logo"></b-img>
          </div>
        </b-nav>
        <b-card-text class="mt-3">
            Para saber mais sobre o desenvolvimento visite nossos links de documentação:
        </b-card-text>
        <b-link href="#" class="card-link">>AzureDevops</b-link>
        <b-link href="#" class="card-link">>Github</b-link>
        <b-link href="#" class="card-link">>Docs</b-link>
      </b-card>
    </div>
  </div>

</template>

<script>
export default {
    nome: "SobreProjeto",
    components: {},
    
}
</script>

<style scoped>
.devImg {
  width: 150px;
  height: 150px;
}
#cardTec{
    background-color:rgba(143, 200, 238, 0.5);
}
</style>