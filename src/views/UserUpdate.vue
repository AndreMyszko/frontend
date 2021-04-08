<template>
    <div id="update-user" class="pb-3">
        <h1>Update User</h1>

        <div class="container">
          <form @submit="validateAndSubmit">

            <div v-if="errors.length">
                <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors"></div>
            </div>

            <fieldset class="form-group col-md-6 m-auto">
                <label>Id</label>
                <input type="text" class="form-control" v-model="id" disabled>
            </fieldset>


            <div class="row">
                <div class="col-md-6 m-auto">
                    <fieldset class="form-group">
                    <label>Name</label>
                <input type="text" class="form-control" v-model="name"> 
                </fieldset>
                <fieldset class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="email">
                </fieldset>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 m-auto">
                <fieldset class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password">
                </fieldset>
                <fieldset class="form-group">
                    <label>User_Role</label>
                    <input type="text" class="form-control" v-model="user_role">
                </fieldset>
                </div>
            </div>

            <fieldset class="form-group">
              <b-form-checkbox id="checkbox-1" name="checkbox-1" v-model="active">
                Active this user?
              </b-form-checkbox>
            </fieldset>

            <button class="btn btn-success mb-3" type="submit">
              <b-icon icon="person-check-fill"></b-icon> Update User
            </button>

          </form>
        </div>        
    </div>
</template>

<script>
import UserService from "../service/user_service";

export default {
    name: "UserUpdate", 

    data() {
        return {
        name: "",
        email: "",
        password: "",
        user_role: "",
        active: "",
        message: null,

        instructor: "user",
        errors: [],
        };
    },

    computed: {
        id() {
        return this.$route.params.id;
        }
    },

    methods: {
        refreshUser() {
            UserService.retrieveUser(this.INSTRUCTOR, this.id).then(res => {
            this.name = res.data.name;
            this.email = res.data.email;
            this.password = res.data.password;
            this.user_role = res.data.user_role;
            this.active = res.data.active;
            });
        },

        validateAndSubmit(e) {
        e.preventDefault();
        this.errors = [];
        if(!this.name) {
            this.errors.push("Nome é obrigatório.");
        } else if(this.name.length < 5) {
            this.errors.push("Nome deve possuir mais de 5 caracteres.");
        }

        if(this.errors.length === 0) {
            if (this.id === -1) {
                UserService.createUser(this.INSTRUCTOR, {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    user_role: this.user_role,
                    active: this.active,
                })
                .then(() => {
                    this.$router.push('/user');
                    console.log(`create user --> ID:${this.id}`);
                });
            } else {
                UserService.updateUser(this.INSTRUCTOR, this.id, {
                    id: this.id,
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    user_role: this.user_role,
                    active: this.active,
                })
                .then(() => {
                    this.$router.push('/user');
                    console.log(`update user --> { NAME: ${this.name}, EMAIL: ${this.email}`);
                });
            }
        }            

        console.log({
        id: this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        user_role: this.user_role,
        active: this.active,
        });  

        },   
    },
    

    created() {
        this.refreshUser();
    },

};
</script>

<style scoped>
#update-user {
  background: linear-gradient(
    to right,
    rgba(143, 238, 171, 0.5),
    rgba(143, 200, 238, 0.5)
  );
}
</style>

