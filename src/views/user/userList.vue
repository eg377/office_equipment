<template>      
  <div class="container mt-3">        
    <user-table />
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