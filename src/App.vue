<script lang="ts">
import {defineComponent} from 'vue';
import LayoutComp from './components/LayoutComp.vue'


export default defineComponent({
  name: 'App',
  components:{
    LayoutComp
  }
});
</script>

<template>
  <LayoutComp/>
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
