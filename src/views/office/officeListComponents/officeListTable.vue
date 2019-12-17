<template>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope = "col">ID</th>
          <th scope = "col">Office Name</th>
          <th scope = "col">Address</th>
          <th scope = "col">City</th>
          <th scope = "col">State</th>
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
    getOffices() {
      // eventually, this will make a call to the backend to get offices
      this.offices = [
        {
          officeId: 0,
          officeName: "office",
          streetAddress: "123 officelandia",
          city: "officeland",
          state: "OF",
          zip: "12345",
          active: true
        },
        {
          officeId: 1,
          officeName: "heck",
          streetAddress: "filler data",
          city: "filler",
          state: "FI",
          zip: "00000",
          active: true
        }
      ];
    }
  },
  components: {
      "table-row": officeListTableRow,
  },
    }
</script>