<template>
  <div>
    <table class="table table-hover table-dark mt-3">
      <thead>
        <tr>
          <th scope="col">User ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Role</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.Id" :user="user" @delete-user="setDelete">
          <th scope="row">{{user.userId}}</th>
          <td>{{user.firstName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.role}}</td>
          <td @click="editUser" class="edit-user text-center">
            <i class="fas fa-pencil-alt"></i>
          </td>
          <td @click="$emit('delete-user', user.userId)" class="edit-user text-center">
            <i class="fas fa-trash"></i>
          </td>
        </tr>
        <tr
          class="inactive"
          v-for="user in inactiveUsers"
          :key="user.userId"
          :user="user"
          @delete-user="setDelete"
        />
      </tbody>
    </table>
    <div class="text-center" v-show="loading">Loading Users...</div>
    <div class="text-center" v-show="deleteUser">
      Are you sure you want to delete user {{idToDelete}}?
      <br />
      <button class="btn btn-primary" @click="confirmDelete">Yes</button>
      <button class="btn btn-danger" @click="clearDelete">No</button>
    </div>
  </div>
</template>

<script>
import userService from "../../../service/common/UserDataServe.js";

export default {
  data() {
    return {
      users: [
        {
          Id: 1,
          userId: 820123,
          firstName: "Sean",
          lastName: "Grano",
          role: "Developer"
        },
        {
          Id: 2,
          userId: 123245,
          firstName: "Blah",
          lastName: "Blub",
          role: "Admin"
        },
        {
          Id: 3,
          userId: 987376,
          firstName: "ha",
          lastName: "ha",
          role: "Manager"
        }
      ],
      loading: false,
      deleteUser: false,
      idToDelete: 1
    };
  },
  created() {
    //comment this back when the backend is up and running
    // this.getUsers();
  },
  props: {
    user: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    async getUsers() {
      this.loading = true;
      const promise = userService.getAllUsers();
      promise.then(result => {
        this.users = result;
        this.loading = false;
      });
    },
    setDelete(id) {
      this.deleteUser = true;
      this.idToDelete = id;
    },
    clearDelete() {
      this.deleteUser = false;
    },
    editUser() {
      this.$router.push({
        path: "userEdit",
        query: {
          id: this.user.userId
        }
      });
    },
    async confirmDelete() {
      const promise = userService.deleteUser(this.idToDelete);
      promise.then(res => {
        this.clearDelete();
        this.getUsers();
      });
    }
  },
  watch: {
    "route": "getUsers"
  },
  computed: {
    activeUsers() {
      let active = this.users.filter(user => user.active);
      return active;
    },
    inactiveUsers() {
      let inactive = this.users.filter(user => !user.active);
      return inactive;
    }
  }
};
</script>

<style>
.inactive {
  background-color: darkgray;
}
.edit-user:hover {
  cursor: pointer;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.edit-user {
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}
</style>
