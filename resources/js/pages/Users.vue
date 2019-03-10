<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
</template>
<script>

  export default {
    data () {
      return {
        headers: [
          {text:'Name',value: 'name'},
          {text:'Email',value:'email'},
          {text:'Role',value:'role'},
          {text:'Created',value:'created_at'},
          {text:'Actions',value:'name',sortable: false}
        ],
        tableData:[],
       
      }
    },
    computed:{
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
      },
    },
    created(){
      this.initialize();
    },
    methods:{
      initialize(){
        axios.get('api/users').then(response=>{
          this.tableData = response.data.data;
        });
      }
    }
  };
</script>
