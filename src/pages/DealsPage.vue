<template>
  <div v-if="!!warehouseStore.dealsData">
    <div>{{warehouseStore.dealsData}}</div>
    <CardComponent :data="warehouseStore.dealsData" :add-to-favorite="warehouseStore.addToFavorite"/>
  </div>
  <p v-else>Загрузка</p>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse";
import CardComponent from "@/components/CardComponent.vue";

export default defineComponent({
  name: 'DealsPage',
  components: {CardComponent},
  setup() {

    const warehouseStore = useWarehouseStore();
    warehouseStore.getDeals()

    return {
      warehouseStore,
    }
  }
});

</script>

