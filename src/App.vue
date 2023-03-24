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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
