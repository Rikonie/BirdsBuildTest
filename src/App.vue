<script lang="ts">
import {defineComponent} from 'vue';
import LayoutComponent from './components/LayoutComponent.vue'


export default defineComponent({
  name: 'App',
  components:{
    LayoutComponent
  }
});
</script>

<template >
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet">
  <LayoutComponent/>
  <router-view></router-view>
</template>

