

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFavoritesStore } from '@/store/favorites';
import { useDealsStore } from '@/store/deals';

const props = defineProps({
  product: Object,
});

const favoritesStore = useFavoritesStore();
const dealsStore = useDealsStore();
const isFavorite = computed(() => favoritesStore.isFavorite(props.product));

const addToDeals = () => {
  dealsStore.addDeal(props.product);
};

const toggleFavorite = () => {
  if (isFavorite.value) {
    favoritesStore.removeFromFavorites(props.product);
  } else {
    favoritesStore.addToFavorites(props.product);
  }
};
</script>

<template>
  <div class="card">
    <img :src="product.image" alt="product-image" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <button @click="addToDeals">Добавить в сделки</button>
    <button @click="toggleFavorite">
      {{ isFavorite ? 'Удалить из избранного' : 'Добавить в избранное' }}
    </button>
  </div>
</template>