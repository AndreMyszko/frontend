<template>
  <div class="container">

    <!-- MENSAGEM DE RETORNO DE MÉTODOS POST -->
    <div v-if="message" class="alert alert-danger">
      <b-icon icon="info-square-fill"></b-icon>
      {{message}}
    </div>  

    <!-- LISTA DE USUÁRIOS (transformar em componente...) -->  
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <!-- <th>Name</th> -->
              <th>Email</th>
              <!-- <th>Role</th>
              <th>Active</th> -->
              <th><!--Remove--></th>
              <th><!--Update--></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" v-bind:key="user.id">
              <td>{{user.id}}</td>
              <!-- <td>{{user.name}}</td> -->
              <td>{{user.email}}</td>
              <!-- <td>{{user.user_role}}</td>
              <td>{{user.active}}</td> -->
              <td>
                <button class="btn btn-primary mr-2 mb-1" v-on:click="updateUserClick(user.id)">
                  <b-icon icon="person-lines-fill">Update</b-icon>
                </button>
                <button class="btn btn-danger mr-2" v-on:click="deleteUserClick(user.id)">
                  <b-icon icon="trash-fill">Delete</b-icon>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
    



  </div>
</template>

<script>
import UserService from "../service/user_service";

export default {
  name: "UserTable",

  data() {
    return {
      users: [],
      message: null,
      instructor: "user",
    };
  },

  methods: {

    //OK - funcionando
    refreshUser() {
      UserService.retriveAllUsers(this.instructor)
        .then(response => {
          this.users = response.data;
          console.log(response.data);
      });
    },

    //OK - funcionando
    deleteUserClick(id) {
      UserService.deleteUser(this.instructor, id)
        .then(response => {
          this.message = `Delete user with ID: ${id} successful`;
          this.refreshUser(); 
          console.log(`delete --> ID:${id}`);
          return response; 
      });
    },

    //OK - funcionando (retorna o id para pagina update)
    updateUserClick(id) {
      this.$router.push(`/user/${id}`);
      console.log(id);
    },

  },
  
  created() {
    this.refreshUser();
  },
};
</script>

<style scoped>
#tb-insert{
  background-color: rgba(59, 145, 224, 0.3);
  border: 1px, solid, blue;
  border-radius: 5px;
}
</style>