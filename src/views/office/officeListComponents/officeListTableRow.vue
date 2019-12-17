<template>
  <tr>
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
</template>

<script>
export default {
    props: {
        office: {
            type: Object,
            default: {}
        },
    },
}
</script>