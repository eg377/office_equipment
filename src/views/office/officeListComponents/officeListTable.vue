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
        <table-row v-for="office in offices" :key="office.id" :office="office"/>
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
          id: 0,
          name: "office",
          address: "123 officelandia",
          city: "officeland",
          state: "OF",
          zip: "12345"
        },
        {
          id: 1,
          name: "heck",
          address: "filler data",
          city: "filler",
          state: "FI",
          zip: "00000"
        }
      ];
    }
  },
  components: {
      "table-row": officeListTableRow,
  },
    }
</script>