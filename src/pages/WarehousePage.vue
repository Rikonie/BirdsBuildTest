<template>
  <div v-if="!!warehouseStore.data" class="hello">
    <h1>warehouse</h1>
    <div v-for="ware in warehouseStore.filteredData" :key="ware.id">
      {{ JSON.stringify(ware) }}
<!--      <button @click="warehouseStore.addToDealsOrFavorites(ware.id, 'isFavorites')">Добавить в избранное</button>-->
<!--      <button @click="warehouseStore.addToDealsOrFavorites(ware.id, 'inDeals')">Добавить в сделки</button>-->
      <img :src="ware.image" alt="image">
    </div>
  </div>
  <p v-else>Загрузка</p>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse"

export default defineComponent({
  name: 'WarehousePage',
  data() {
    return {
      searchName: '',
      filterData: ["Все", "Аукцион", "Прямые продажи"]
    }

  },
  setup() {

    const warehouseStore = useWarehouseStore();
    warehouseStore.fetchProducts()

    return {
      warehouseStore,
    }
  }
});

</script>