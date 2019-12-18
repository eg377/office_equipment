<template>
  <ContentWrapper>
    <div class="container">
      <div class="content-heading text-center">
        <h1>Add New Office</h1>
      </div>
      <form class="jumbotron jumbotron-fluid">
        <div class="form-group">
          <button type="button" class="close text-danger" aria-label="Close">
            <span aria-hidden="true">
              <i class="far fa-times-circle"></i>
            </span>
          </button>
        </div>
        <div class="form-group">
          <label for="officeName">Name</label>
          <input type="text" class="form-control" id="officeName" v-model="officeName" />
        </div>

        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            v-model="address"
            placeholder="1234 Main St"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            v-model="address2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" v-model="city" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <input id="inputState" class="form-control" v-model="state" />
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" v-model="zip" />
          </div>
        </div>
        <div class="form-group text-center">
          <button type="submit" class="btn btn-lg btn-primary">Save</button>
          <button type="submit" class="btn btn-lg btn-danger ml-2">Cancel</button>
        </div>
      </form>
    </div>
  </ContentWrapper>
</template>

<script>
import OfficeDataService from "../../service/common/OfficeDataService";
export default {
  name: "Office",
  data() {
    return {
      officeName: "Cognizant",
      address: "500 Frank Burr Blvd",
      address2: "",
      city: "Teaneck",
      state: "NJ",
      country: "USA",
      zip: "07666",
      errors: []
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    //this code checks the validity of the fields

    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.officeName) {
        this.errors.push("Enter valid values");
      }
      if (!this.address) {
        this.errors.push("Enter valid values");
      }
      if (!this.city) {
        this.errors.push("Enter valid values");
      }
      if (!this.state) {
        this.errors.push("Enter valid values");
      }
      if (!this.country) {
        this.errors.push("Enter valid values");
      }
      if (!this.zip) {
        this.errors.push("Enter valid values");
      }

      //When the user input is valid, if there is no id in the path
      //then the office is saved to the database and the app is routed to officeList
      if (this.errors.length === 0) {
        if (this.id === -1) {
          OfficeDataService.createOffice({
            office: this.office
          }).then(() => {
            this.$router.push("/officeList");
          });
        }

        //When the user input is valid, if there is id in the path
        //then the office is updated in the database and the app is routed to officeList
        else {
          OfficeDataService.updateOffice(this.id, {
            id: this.id,
            office: this.office
          }).then(() => {
            this.$router.push("/officeList");
          });
        }
      }
    }
  }
};
</script>
