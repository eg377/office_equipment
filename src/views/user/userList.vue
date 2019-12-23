<template>
  <div>
    <!-- <NavBar /> -->
    
      <div class="container">
        <div class="text-center">
          <button class="btn btn-primary text-center add-btn" @click="addUser">Add User</button>
        </div>
        <user-table />


      </div>
    
  </div>
</template>

<script>
import ContentWrapper from "../../components/Layout/ContentWrapper";
import userListTableVue from "./userListComponents/userListTable.vue";
import NavBar from "../../../src/components/NavBar/navbar.vue";


 

export default {
  components: {
    "user-table": userListTableVue,
    ContentWrapper: ContentWrapper,
    NavBar
  },
  methods: {
    addUser() {
      console.log('token',sessionStorage.getItem('access_token'));
      this.$router.push({path: "users/new"})
    }
  }
};
</script>

<style scoped>
  .add-btn {
    width: 50%;
  }
</style>