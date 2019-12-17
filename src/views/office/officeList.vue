<template>
  <ContentWrapper>
      <div class="container">
    <!-- <div class="content-heading">
            <div>office list view
            </div>            
        </div>
        <div class="row">
            office list view 
    </div>-->

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
        <tr v-for="office in offices" :key="office.id">
          <th scope="row">{{office.id}}</th>
          <td>{{office.name}}</td>
          <td>{{office.address}}</td>
          <td>{{office.city}}</td>
          <td>{{office.state}}</td>
          <td>{{office.zip}}</td>
          <td>
            <i class="fas fa-pencil-alt"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-primary text-center">Add Table</button>
    </div>
  </ContentWrapper>
</template>

<script>
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
  }
};
</script>