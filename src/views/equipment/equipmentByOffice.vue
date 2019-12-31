<template>
  <div class="card card-default">
    <!-- extra add button -->
     <div class="text-center">
        <button class="btn btn-primary text-center add-btn" @click="addEquipment(id)" v-if="checkIfAdmin()">Add equipment</button>
      </div>
      <!-- extra add button -->
    <div class="card-body">
      <b-col lg="6" class="my-1">
        <b-form-group
                label="Filter:"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                label-for="filterInput"
                class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
                    v-model="filter"
                    type="search"
                    id="filterInput"
                    placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <button :disabled="!filter" @click="filter = ''">Clear</button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <div class="overflow-auto">
        <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
        ></b-pagination>
        <b-table
                responsive
                striped
                hover
                :items="equipments"
                :fields="fieldsSortable"
                id="my-table"
                @filtered="onFiltered"
                :filter="filter"
                :per-page="perPage"
                :current-page="currentPage"
        >
          <template slot="actions" scope="row">
           
            <span class="fa-stack edit-equipment" @click="editEquipment(row.item.equipmentId)" v-if="checkIfAdmin()">
              <i class="fas fa-edit fa-2x icon-button"></i>
              <span class="icon-tooltip fa-stack-1x font-weight-bold">Edit</span>
            </span>&nbsp;&nbsp;
            <span class="fa-stack edit-equipment" @click="setDelete(row.item)" v-if="checkIfAdmin()">
              <i class="far fa-trash-alt fa-2x icon-button"></i>
              <span class="icon-tooltip fa-stack-1x font-weight-bold">Delete</span>
            </span>
            <span class="fa-stack edit-equipment" @click="equipmentDetail(row.item.equipmentId)">
              <i class="fas fa-eye fa-2x icon-button"></i>
              <span class="icon-tooltip fa-stack-1x font-weight-bold">View Equipment Details</span>
            </span>
          </template>
        </b-table>
      </div>

      <br />
      <br />
      <br />
  
      <div id="deleteMessage" class="text-center" v-show="deleteEquipment">
        Are you sure you want to delete equipment: {{deleteEquipmentName}}?
        <br />
        <button class="btn btn-primary" @click="confirmDelete">Yes</button>
        <button class="btn btn-danger" @click="clearDelete">No</button>
      </div>
    </div>
  </div>
</template>

<script>

  import equipmentService from "../../service/common/EquipmentDataService.js";
  import authService from "../../service/common/CommonCall";
  export default {
    data() {

      return {
        id: this.$route.params.id,
        filter: null,
        perPage: 5,
        currentPage: 1,
        inactiveCurrentPage: 1,
        loading: false,
        deleteEquipment: false,
        idToDelete: undefined,
        deleteEquipmentName: "",
        equipments: [],
        watch: {
          route: "getEquipments"
        },
        transProps: {
          // Transition name
          name: "flip-list"
        },
        
        fieldsSortable: {
          equipmentType: {
            label: "Equipment Type",
            sortable: true
          },
          assigned: {
            label: "Assigned",
            sortable: true
          },
          actions: {
            label: "Actions"
          }
        },
        adminFieldsSortable: {
          equipmentId: {
            label: "ID",
            sortable: true
          },
          equipmentType: {
            label: "Equipment Type",
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
    watch: {
      '$route' (to, from) {
        this.id = this.$route.params.id;
        this.getEquipments()
      }
    },
    async created() {
      this.getEquipments();
    },
    
    methods: {
      addEquipment(id) {
        this.$router.push({
          name: "addEquipmentInOffice",
          path: "/equipment/new",
          params: {
            officeId: id
          }
        });
      },
      equipment(id) {
        this.$router.push({
          name: "equipment",
          params: {
            id: id
          }
        });
      },
      checkIfAdmin() {
        return authService.checkAuthority("ROLE_ADMIN");
      },
      editEquipment(id) {
        this.$router.push({
          name: "editEquipment",
          path: "/equipment/edit",
          params: {
            id: id
          }
        });
      },
      equipmentDetail(id) {
        this.$router.push({
          name: "equipmentDetail",
          params: {
            id: id
          }})
      },
      async getEquipments() {
        if (this.id) {
          console.log("ID found : " + this.id);
          const promise = equipmentService.getEquipmentsByOfficeId(this.id);
          console.log(promise);
          promise.then(result => {
            this.equipments = result;
            this.loading = false;
          });
        } else {
          console.log("ID not found.");
          const promise = equipmentService.getAllEquipments();
          promise.then(result => {
            this.equipments = result;
            this.loading = false;
          });
        }
      },
      setDelete(equipment) {
        this.deleteEquipment = true;
        this.idToDelete = equipment.equipmentId;
        this.deleteEquipmentName = equipment.equipmentName;
      },
      clearDelete() {
        this.deleteEquipment = false;
      },
      async confirmDelete() {
        const promise = equipmentService.deleteEquipment(this.idToDelete);
        console.log(promise);
        promise.then(() => {
          this.clearDelete();
          this.getEquipments();
        });
      },
      onFiltered(filteredItems) {
        this.inactiveCurrentPage = 1;
      }
    },
    computed: {
      rows() {
        return this.equipments.length;
      },  
    }
  };
</script>

<style scoped>
  .inactive {
    background-color: darkgray;
  }
  .edit-equipment:hover {
    cursor: pointer;
  }
  .edit-equipment {
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    word-wrap: normal;
    color: inherit;
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
  .icon-tooltip {
    opacity: 0;
  }
  .edit-equipment:hover .icon-tooltip {
    opacity: 0.5;
  }
  .icon-button {
    opacity: 0.5;
  }
  .edit-equipment:hover .icon-button {
    opacity: 0;
  }
</style>
