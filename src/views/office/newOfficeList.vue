<template>
  <div class="card card-default">
    <!-- <div class="card-header">Sortable</div> -->
    <div class="card-body">
      <!-- <button @click="getOffices()">Get Offices Button</button> -->
      <b-table v-if="checkIfAdmin()" responsive striped hover :items="activeOffices" :fields="fieldsSortable">
        <template  slot="actions" scope="row">
          <i id="editButton" class="fas fa-edit fa-2x" @click="editOffice(row.item.officeId)"></i>&nbsp;&nbsp;
          <!-- <i class="far fa-trash-alt fa-2x" @click="$emit('delete-office', office.officeId)"></i> -->
          <i id="editButton" class="far fa-trash-alt fa-2x" @click="setDelete(row.item)"></i>
        </template>
      </b-table>

      <b-table v-else responsive striped hover :items="activeOffices" :fields="activeNoneAdminSortable">
      </b-table>


      <br>
      <br>
      <br>
      <div v-if="checkIfAdmin()">
        <h3>Inactive Offices</h3>
        <b-table responsive striped hover :items="inactiveOffices" :fields="adminFieldsSortable">
          <template slot="actions" scope="row">
            <i id="editButton" class="fas fa-edit fa-2x" @click="editOffice(row.item.officeId)"></i>&nbsp;&nbsp;
          </template>
        </b-table>
      </div>

      <!-- YOU ARE SIMPLY NOT VIEWING THE DELETED OFFICES BUT THEY ARE A SOFT DELETE. -->
      <div id="deleteMessage" class="text-center" v-show="deleteOffice">
        Are you sure you want to delete office: {{deleteOfficeName}}?
        <br />
        <button class="btn btn-primary" @click="confirmDelete">Yes</button>
        <button class="btn btn-danger" @click="clearDelete">No</button>
      </div>
    </div>
  </div>
</template>

<script>
import officeService from "../../service/common/OfficeDataService.js";
import authService from '../../service/common/CommonCall'

export default {
  data() {
    return {
      loading: false,
      deleteOffice: false,
      idToDelete: undefined,
      deleteOfficeName: "",
      offices: [],
      watch: {
        route: "getOffices"
      },

      // Fields with Sortable definition
      // Note 'isActive' is left out and will not appear in the rendered table
      activeNoneAdminSortable: {
        officeName: {
          label: "Office Name",
          sortable: true
        },
        streetAddress: {
          label: "Address",
          sortable: true
        },
        city: {
          label: "City",
          sortable: true
        },
        zip: {
          label: "Zip Code",
          sortable: true
        },
        state: {
          label: "State",
          sortable: true
        },
        country: {
          label: "Country",
          sortable: true
        },
        // actions: {
        //   label: "Actions"
        // }
      },
      fieldsSortable: {
        officeName: {
          label: "Office Name",
          sortable: true
        },
        streetAddress: {
          label: "Address",
          sortable: true
        },
        city: {
          label: "City",
          sortable: true
        },
        zip: {
          label: "Zip Code",
          sortable: true
        },
        state: {
          label: "State",
          sortable: true
        },
        country: {
          label: "Country",
          sortable: true
        },
        actions: {
          label: "Actions"
        }
      },
      adminFieldsSortable: {
        officeId: {
          label: "ID",
          sortable: true
        },
        officeName: {
          label: "Office Name",
          sortable: true
        },
        streetAddress: {
          label: "Address",
          sortable: true
        },
        city: {
          label: "City",
          sortable: true
        },
        zip: {
          label: "Zip Code",
          sortable: true
        },
        state: {
          label: "State",
          sortable: true
        },
        country: {
          label: "Country",
          sortable: true
        },
        actions: {
          label: "Actions"
        }
      },
      style: {
        striped: false,
        bordered: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false
      }
    };
  },
  async created() {
    this.getOffices();
  },
  methods: {
    checkIfAdmin(){
      return authService.checkAuthority("ROLE_ADMIN");
    },
    editOffice(id) {
      this.$router.push({
        name: "editOffice",
        //path: "office/edit",
        query: {
          id: id
        }
      });
    },
    async getOffices() {
      //console.log("start");
      //console.log(officeService.getAllOffices());
      const promise = officeService.getAllOffices();
      //console.log(promise);
      promise.then(result => {
        this.offices = result;
        this.loading = false;
      });
      //console.log(this.offices);
      //console.log("end");
    },
    setDelete(office) {
      //console.log(id);
      this.deleteOffice = true;
      this.idToDelete = office.officeId;
      this.deleteOfficeName = office.officeName;
    },
    clearDelete() {
      this.deleteOffice = false;
    },
    async confirmDelete() {
      const promise = officeService.deleteOffice(this.idToDelete);
      console.log(promise);
      promise.then(res => {
        this.clearDelete();
        this.getOffices();
      });
    }
  },
  computed: {
    activeOffices() {
      let active = this.offices.filter(office => office.active);
      return active;
    },
    inactiveOffices() {
      let inactive = this.offices.filter(office => !office.active);
      return inactive;
    }
  }
};
</script>

<style scoped>
#editButton:hover{
  opacity: 0.5;
}

.inactive {
  background-color: darkgray;
}

.edit-office:hover {
  cursor: pointer;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.edit-office {
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

#deleteMessage {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  max-width: fit-content;
  color: black;
  background-color: #dee2e6;
  margin: 0;
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 0.5em;
  font-family: "Source Sans Pro", sans-serif;
}
</style>


