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
    </form>
    <button @click="linkMet()">
    <router-link to="/" exact>Warehouse</router-link>
    </button>
    <button @click="linkMet()">
      <router-link to="/deals" exact>Deals</router-link>
    </button>
    <button @click="linkMet()">
      <router-link to="/favorites" exact>Favorites</router-link>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse"


export default defineComponent({
  name: 'LayoutComponent',
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
    },
    linkMet(){
    this.searchName = ""
    this.warehouseStore.searchData(this.searchName)
    }
  }
});

</script>