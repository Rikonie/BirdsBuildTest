<template>
  <div v-if="!!warehouseStore.favoritesData">
    <div v-if="warehouseStore.favoritesData?.length===0">Результаты не найдены</div>
    <CardComponent v-else :data="warehouseStore.favoritesData"/>
  </div>
  <p v-else>Загрузка</p>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse";
import CardComponent from "@/components/CardComponent.vue";

export default defineComponent({
  name: 'FavoritesPage',
  components: {CardComponent},
  setup() {
    const warehouseStore = useWarehouseStore();
    warehouseStore.getFavorites()
    return {
      warehouseStore,
    }
  }
});

</script>