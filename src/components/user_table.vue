<template>
  <div class="container">
    <h3 class="float-left">
      <b-icon icon="people-fill"></b-icon> | All Users:
    </h3>
    <!-- <b-table striped hover :items="items"></b-table> -->
  </div>
</template>

<script>
import UserService from "../service/user_service";

export default {
  name: "UserTable",
  data() {
    return {
      instructor: "user",
    };
  },
  methods: {
    refreshUser() {
      UserService.retriveAllUsers(this.instructor).then((response) => {
        console.log(response.data);
      });
    },
  },
  created() {
    this.refreshUser();
  },
};
</script>

<style scoped></style>

<!-- insert into data(){} to return a static list -->
<!--
      return {
        items: [
          { id: 1, name: 'Bob Esponja Calça Quadrada', email: 'email@email.com', password:'********', user_role:'admin', active: true },  
          { id: 2, name: 'Bob Esponja Calça Quadrada Jr.', email: 'email@email.com', password:'********', user_role:'admin', active: true },  
          { id: 3, name: 'Frodo Bolseiro', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 4, name: 'Fabiana Fagundes', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 5, name: 'Albert Einstener', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 6, name: 'Mozart Filho', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 7, name: 'Gandalf Mithrandir', email: 'email@email.com', password:'********', user_role:'admin', active: true },  
          { id: 8, name: 'Barney Sap', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 9, name: 'Marina Silveira Sauro', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 10, name: 'Altair Bozô Covas', email: 'email@email.com', password:'********', user_role:'user', active: false },  
          { id: 11, name: 'Fabiola Fago', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 12, name: 'Fabricio Fuacloult', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 13, name: 'Angela Cury', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 14, name: 'Anderson Drucker', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 15, name: 'Petter Shell', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 16, name: 'Amarildo', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 17, name: 'Carla Parene', email: 'email@email.com', password:'********', user_role:'user', active: true },  
          { id: 18, name: 'Suzana Albertine Castrada', email: 'email@email.com', password:'********', user_role:'user', active: true },  

        ]
      }

-->
