<template>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope = "col">ID</th>
          <th scope = "col">Office Name</th>
          <th scope = "col">Address</th>
          <th scope = "col">City</th>
          <th scope = "col">Zip Code</th>
          <th scope = "col"></th>
        </tr>
      </thead>
      <tbody>
        <table-row v-for="office in offices" :key="office.officeId" :office="office"/>
      </tbody>
    </table>
</template>

<script>
    import officeListTableRow from "./officeListTableRow";
    import officeService from "../../../service/common/OfficeDataService.js"

    export default {
         data() {
    return {
      offices: []
    };
  },
  created() {
    this.getOffices();
  },
  methods: {
    async getOffices() {
      const promise = officeService.getAllOffices();
      promise.then(result => {
        this.offices = result
      })
      
    }
  },
  components: {
      "table-row": officeListTableRow,
  },
    }
</script>