<template>
  <div class="hello">
    <h1>Favorites</h1>
    <p>{{JSON.stringify(favoritesStore.data)}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useFavoritesStore} from "@/store/favorites";

export default defineComponent({
  name: 'FavoritesPage',
  props: {
    msg: String,
  },
  setup(){
    const favoritesStore = useFavoritesStore();
    return {
      favoritesStore
    }
  }
});
</script>