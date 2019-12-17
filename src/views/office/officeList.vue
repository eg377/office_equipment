<template>
    <ContentWrapper>
        <!-- <div class="content-heading">
            <div>office list view
            </div>            
        </div>
        <div class="row">
            office list view 
        </div> -->

        <table class="table">
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Office Name
                </th>
                <th>
                    Address
                </th>
                <th>
                    City
                </th>
                <th>
                    State
                </th>
                <th>
                    Zip Code
                </th>
                <th>

                </th>
            </tr>
            <tr v-for="office in offices" :key="office.id">
                <td> 
                    {{office.id}} 
                </td>
                <td>
                    {{office.name}}
                </td>
                <td>
                    {{office.address}}
                </td>
                <td>
                    {{office.city}}
                 <td>
                    {{office.state}}
                </td>
                <td>
                    {{office.zip}}
                </td>
                <td>
                    <i class="fas fa-pencil-alt"></i>
                </td>
            </tr>
        </table>

        <button class="btn btn-primary">
            Add Table
        </button>
    </ContentWrapper>
</template>

<script>
    export default {        
        data() {
            return {
                offices: []
            }
        },
        created () {
            this.getOffices();
        },
        methods: {
            getOffices() {
                this.offices = [{
                    id: 0,
                    name: "office",
                    address: "123 officelandia",
                    city: "officeland",
                    state: "OF",
                    zip: "12345"
                }, {
                    id: 1,
                    name: "heck",
                    address: "filler data",
                    city: "filler",
                    state: "FI",
                    zip: "00000"
                }]
            }
        },
    }
</script>