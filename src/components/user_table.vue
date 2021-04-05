<template>
  <div class="container">

  <div class="container">
    <h3>New User</h3>
    <div class="container">
      <form>
        <fieldset class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="description">
        </fieldset>
        <fieldset class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="description">
        </fieldset>
        <fieldset class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="description">
        </fieldset>
        <fieldset class="form-group">
          <label>User_Role</label>
          <input type="text" class="form-control" v-model="description">
        </fieldset>
        <fieldset class="form-group">
          <label>Active</label>
          <input type="text" class="form-control" v-model="description">
        </fieldset>
        <button class="btn btn-success" type="submit">Add User</button>
      </form>
    </div>
  </div>



    <h3 class="float-left">
      <b-icon icon="people-fill"></b-icon> | All Users:
      <div v-if="message" class="alert alert-success">
        {{message}}
      </div>
    </h3>
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
            <button class="btn btn-danger" v-on:click="deleteUserClick(user)">
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
    <!-- <b-table striped hover :items="items"></b-table> -->
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
    refreshUser() {
      UserService.retriveAllUsers(this.instructor)
        .then(response => {
        this.users = response.data;
        console.log(response.data);
      });
    },
    // deleteUserClick(user) {
    //   UserService.deleteUser(this.instructor, user).then(response => {
    //     this.message = `Delete user ${user} successful`;
    //     this.refreshUser();  
    //   });
    // },
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
