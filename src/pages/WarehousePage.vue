<template>
  <div class="hello">
    <h1>warehouse</h1>
    <div v-for="ware in warehouseStore.data" :key="ware.id">
      {{JSON.stringify(ware)}}
      {{ware.id}}
      <button @click="warehouseStore.addToFavorites(ware.id)">Добавить в избранное</button>
      <button @click="warehouseStore.addToDeals(ware.id)">Добавить в сделки</button>
    </div>
    <p v-if="!!warehouseStore.data">{{ JSON.stringify(warehouseStore.data) }}</p>
    <p v-else>Загрузка</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useWarehouseStore} from "@/store/warehouse";

export default defineComponent({
  name: 'WarehousePage',
  props: {
    d: [],
  },
  setup(){

    const warehouseStore = useWarehouseStore();
    warehouseStore.fetchProducts();

    return {
      warehouseStore
    }
  },
});

</script>