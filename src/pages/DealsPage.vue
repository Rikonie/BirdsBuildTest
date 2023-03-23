<template>
  <div v-if="!!warehouseStore.dealsData" class="hello">
    <h1>deals</h1>
    <div v-for="deals in warehouseStore.dealsData" :key="deals.id">
      {{ JSON.stringify(deals) }}
      <!--      <button @click="favoritesStore.addToDealsOrFavorites(favorites.id, 'isFavorites')">Добавить в избранное</button>-->
      <!--      <button @click="favoritesStore.addToDealsOrFavorites(favorites.id, 'inDeals')">Добавить в сделки</button>-->
      <img :src="deals.image" alt="image">
    </div>
  </div>
  <p v-else>Загрузка</p>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse";

export default defineComponent({
  name: 'DealsPage',
  data() {
    return {
      searchName: '',
      filterData: ["Все", "Аукцион", "Прямые продажи"]
    }

  },
  setup() {

    const warehouseStore = useWarehouseStore();
    warehouseStore.getDeals()

    return {
      warehouseStore,
    }
  }
});

</script>

