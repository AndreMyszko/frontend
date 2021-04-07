<template>
  <div class="container">

    <!-- MENSAGEM DE RETORNO DE MÉTODOS POST -->
    <div v-if="message" class="alert alert-success">
      {{message}}
    </div>


    <!-- INSERIR NOVO USUÁRIO (transformar em componente...) -->
    <b-button v-b-toggle.collapse-1 variant="primary" class="mr-2"><b-icon icon="person-plus-fill"></b-icon> New User</b-button>
    <b-collapse id="collapse-1" class="mt-2 mb-3">
      <b-card>
            <div class="container">
        <form>
          <fieldset class="form-group">
            <label>Name</label>
            <input type="text" class="form-control"> <!-- v-model="description" -->
          </fieldset>
          <fieldset class="form-group">
            <label>Email</label>
            <input type="text" class="form-control">
          </fieldset>
          <fieldset class="form-group">
            <label>Password</label>
            <input type="password" class="form-control">
          </fieldset>
          <fieldset class="form-group">
            <label>User_Role</label>
            <input type="text" class="form-control">
          </fieldset>
          <fieldset class="form-group">
            <b-form-checkbox id="checkbox-1" name="checkbox-1">
              Active this user?
            </b-form-checkbox>
          </fieldset>
          <button class="btn btn-success" type="submit" v-on:click="addUserClick(user)">
            <b-icon icon="person-check-fill"></b-icon> Add User
          </button>
        </form>
      </div>
      </b-card>
    </b-collapse>
  

    <!-- LISTA DE USUÁRIOS (transformar em componente...) -->  
    <b-button v-b-toggle.collapse-2 variant="primary" class="mr-2"><b-icon icon="people-fill"></b-icon> All Users</b-button>
    <b-collapse id="collapse-2" class="mt-2 mb-3">
      <b-card>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Active</th>
              <th>Remove</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" v-bind:key="user.id">
              <td>{{user.id}}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.user_role}}</td>
              <td>{{user.active}}</td>
              <td>
                <button class="btn btn-danger" v-on:click="deleteUserClick(user.id)">
                  <b-icon icon="trash-fill">Delete</b-icon>
                </button>
              </td>
              <td>
                <button class="btn btn-primary" v-on:click="updateUserClick(user)">
                  <b-icon icon="person-lines-fill">Update</b-icon>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </b-collapse>
    



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

    //400 - bad request
    deleteUserClick(id) {
      UserService.deleteUser(this.instructor, id)
        .then(response => {
          this.message = `Delete user ${id} successful`;
          this.refreshUser(); 
          return response; 
      });
    },

    //400 - bad request
    addUserClick(user){
      UserService.addUser(this.instructor, user)
        .then(response =>{
          this.user = response.data.user;
          console.log(response.data.user);
          this.message = `Insert user ${user.name} - ${user.email} successful`;
          this.refreshUser();
          return response;
        });
    },

  },
  
  created() {
    this.refreshUser();
  },
};
</script>

<style scoped></style>