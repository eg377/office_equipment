<template>
  <ContentWrapper>
      <div class="container">
          <office-table/>

    <button class="btn btn-primary text-center">Add Table</button>
    </div>
  </ContentWrapper>
</template>

<script>
import officeListTableVue from './officeListComponents/officeListTable.vue';

export default {
 
  components: {
      "office-table": officeListTableVue
  },
};
</script>