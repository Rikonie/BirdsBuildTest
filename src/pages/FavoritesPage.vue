<template>
  <div v-if="!!warehouseStore.favoritesData" class="hello">
    <h1>favorites</h1>
    <div v-for="favorites in warehouseStore.favoritesData" :key="favorites.id">
      {{ JSON.stringify(favorites) }}
<!--      <button @click="favoritesStore.addToDealsOrFavorites(favorites.id, 'isFavorites')">Добавить в избранное</button>-->
<!--      <button @click="favoritesStore.addToDealsOrFavorites(favorites.id, 'inDeals')">Добавить в сделки</button>-->
      <img :src="favorites.image" alt="image">
    </div>
  </div>
  <p v-else>Загрузка</p>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse";

export default defineComponent({
  name: 'FavoritesPage',
  data() {
    return {
      filterData: ["Все", "Аукцион", "Прямые продажи"]
    }

  },
  setup() {

    const warehouseStore = useWarehouseStore();
    warehouseStore.getFavorites()

    return {
      warehouseStore,
    }
  }
});

</script>