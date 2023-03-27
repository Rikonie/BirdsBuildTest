<template>
  <div v-if="!!warehouseStore.filteredData">
    <div v-if="warehouseStore.filteredData?.length===0" class="notFound">Результаты не найдены</div>
    <CardComponent v-else :data="warehouseStore.filteredData"/>
  </div>
  <p v-else class="notFound">Загрузка</p>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse"
import CardComponent from "@/components/CardListComponent.vue";

export default defineComponent({
  name: 'WarehousePage',
  components: {CardComponent},
  setup() {

    const warehouseStore = useWarehouseStore();
    warehouseStore.fetchProducts()

    return {
      warehouseStore,
    }
  }
});

</script>

<style>
.notFound{
  display: flex;
  justify-content: center;
  color: #2D3B87;
  font-family: 'Rubik';
}
</style>