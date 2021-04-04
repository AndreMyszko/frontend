<template>
  <div id="user" class="pb-3">
    <h1>USER</h1>
    <UserTable />
  </div>
</template>

<script>
import UserTable from '../components/user_table';

export default {
  name: "User",
  components: {
    UserTable,
  },
  
}
</script>

<style scoped>
#user {
  background: linear-gradient(to right, rgba(143, 238, 171, 0.5), rgba(143, 200, 238, 0.5));
}
</style>