<template>
  <ContentWrapper>
      <div class="container">
          <office-table/>

    <button class="btn btn-primary text-center" @click="addOffice">Add Office</button>
    </div>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from '../../components/Layout/ContentWrapper'
import officeListTableVue from './officeListComponents/officeListTable.vue';

export default {
 
  components: {
      "office-table": officeListTableVue,
      ContentWrapper: ContentWrapper
  },
  methods: {
      addOffice() {
          console.log("Add functionality to be added later!")
          // Should route to add office page
      }
  },
};
</script>