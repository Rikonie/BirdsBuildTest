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

<template>
  <LayoutComponent/>
  <router-view></router-view>
</template>

