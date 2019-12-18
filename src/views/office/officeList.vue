<template>
  <div>
    <!-- <NavBar /> -->
    <ContentWrapper>
      <div class="container">
        <office-table />

        <button class="btn btn-primary text-center" @click="addOffice">Add Office</button>
      </div>
    </ContentWrapper>
  </div>
</template>

<script>
import ContentWrapper from "../../components/Layout/ContentWrapper";
import officeListTableVue from "./officeListComponents/officeListTable.vue";
// import NavBar from "../../../src/components/NavBar/navbar.vue";

export default {
  components: {
    "office-table": officeListTableVue,
    ContentWrapper: ContentWrapper,
    //NavBar
  },
  methods: {
    addOffice() {
      this.$router.push({path: "officeEdit"})
    }
  }
};
</script>