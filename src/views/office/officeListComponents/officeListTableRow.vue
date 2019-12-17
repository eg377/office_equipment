<template>
  <tr>
    <th scope="row">{{office.officeId}}</th>
    <td>{{office.officeName}}</td>
    <td>{{office.streetAddress}}</td>
    <td>{{office.city}}</td>
    <td>{{office.state}}</td>
    <td>{{office.zip}}</td>
    <td @click="editOffice" class="edit-office text-center">
      <i class="fas fa-pencil-alt" ></i>
    </td>
  </tr>
</template>

<script>
export default {
    props: {
        office: {
            type: Object,
            default: {}
        },
    },
    methods: {
        editOffice() {
            console.log("Functionality to be added later!" + this.office.id)
            // Route to editOfficeRoute/office.id, whatever editOfficeRoute might end up being 
        }
    },
}
</script>

<style scoped>
  .edit-office:hover {
    cursor: pointer
  }
</style>