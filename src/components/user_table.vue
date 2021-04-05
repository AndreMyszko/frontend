<template>
  <div class="container">

  <div class="container">
    <h3>New User</h3>
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
          <label>Active</label>
          <input type="text" class="form-control">
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
    deleteUserClick(user) {
      UserService.deleteUser(this.instructor, user)
        .then(response => {
        this.message = `Delete user ${user.id} - ${user.email} successful`;
        this.refreshUser(); 
        return response 
      });
    },
  },
  created() {
    this.refreshUser();
  },
};
</script>

<style scoped></style>