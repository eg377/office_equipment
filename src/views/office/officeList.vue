<template>
  <div>
    <!-- <NavBar /> -->
    
      <div class="container">
        <div class="text-center">
          <button 
            class="btn btn-primary text-center add-btn" 
            @click="addOffice"
            v-if="isAdmin">
              Add Office
          </button>
        </div>
        <office-table :isAdmin="isAdmin" />


      </div>
    
  </div>
</template>

<script>
import ContentWrapper from "../../components/Layout/ContentWrapper";
import officeListTableVue from "./officeListComponents/officeListTable.vue";
import NavBar from "../../../src/components/NavBar/navbar.vue";

export default {
  components: {
    "office-table": officeListTableVue,
    ContentWrapper: ContentWrapper,
    NavBar
  },
  methods: {
    addOffice() {
      this.$router.push({name: "addOffice"})
    }
  },
  computed: {
    userPermissions() {
      const token = sessionStorage.getItem("access_token")

      try {
        const parsed = JSON.parse(atob(token.split('.')[1]))
        return parsed.authorities;
      } catch (e) {
        return e;
      }
    },
    isAdmin() {
      return this.userPermissions.includes("ROLE_ADMIN")
    }
  },
};
</script>

<style scoped>
  .add-btn {
    width: 50%;
  }
</style>