<template>
  <div v-if="!!warehouseStore.filteredData">
    <div v-if="warehouseStore.filteredData?.length===0">Результаты не найдены</div>
    <CardComponent v-else :data="warehouseStore.filteredData"/>
  </div>
  <p v-else>Загрузка</p>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse"
import CardComponent from "@/components/CardComponent.vue";

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