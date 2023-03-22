<template>
  <div class="hello">
    <h1>deals</h1>
    <p>{{JSON.stringify(dealsStore.data)}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useDealsStore} from "@/store/deals";

export default defineComponent({
  name: 'DealsPage',
  props: {
    msg: String,
  },
  setup(){
    const dealsStore = useDealsStore();
    return {
      dealsStore
    }
  }
});
</script>

