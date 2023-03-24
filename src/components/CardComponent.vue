<template>
      <div v-for="item in data">
        {{ JSON.stringify(item) }}
        <img :src="item.image" alt="image">
        <button @click="warehouseStore.addToFavorite(item)">Добавить в избранное</button>
        <button @click="warehouseStore.addToDeals(item)">Добавить в сделки</button>
        <button @click="warehouseStore.toPaid(item)">Оплатить</button>
      </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse";


export default defineComponent({
  name: 'CardComponent',
  props: {
    data: Array,
    addToFavorite: Function,
  },
  setup() {

    const warehouseStore = useWarehouseStore();

    return {
      warehouseStore,
    }
  }
});

</script>