<template>
  <div>
    <div v-for="val in filterData" :key="val">
      <button @click="()=>{
        filterMethod(val)
        searchMethod()
      }">{{ val }}
      </button>
    </div>
    <form @submit.prevent="searchMethod()">
      <input v-model="searchName">
      <button>Поиск</button>
      <p>{{ $route.path}}</p>
    </form>
    <router-link to="/" exact>Warehouse</router-link>
    <router-link to="/deals" exact>Deals</router-link>
    <router-link to="/favorites" exact>Favorites</router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse"


export default defineComponent({
  name: 'LayoutComp',
  data() {
    return {
      searchName: localStorage.getItem("search"),
      filterData: ["Все", "Аукцион", "Прямые продажи"]
    }

  },
  setup() {

    const warehouseStore = useWarehouseStore();

    return {
      warehouseStore,
    }
  },
  methods:{
    filterMethod(value: string){
      this.warehouseStore.setFilter(value)
    },
    searchMethod(){
     this.warehouseStore.searchData(this.searchName as string)
    }
  }
});

</script>