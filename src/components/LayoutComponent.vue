<template>
  <div class="container">
    <div class="header" style="flex-direction: column; justify-content: center;">
      <div class="top"></div>
      <div class="linkContainer">
        <button @click="linkMethod()" v-bind:class="[$route.path === '/deals'? 'buttonLinkClick': 'buttonLink']">
          <img src="../../public/deals.png" alt="Сделки">
          <router-link to="/deals" exact class="linkText" style="margin-top: 6px">Сделки
          </router-link>
        </button>
        <button @click="linkMethod()" v-bind:class="[$route.path === '/'? 'buttonLinkClick': 'buttonLink']">
          <img src="../../public/warehouse.png" alt="Склад">
          <router-link to="/" exact class="linkText"
                       style="margin-top: 6px">Склад
          </router-link>
        </button>
        <button @click="linkMethod()" v-bind:class="[$route.path === '/favorites'? 'buttonLinkClick': 'buttonLink']">
          <img src="../../public/favorite.png" alt="Избранное" style="margin-top: 4px;">
          <router-link to="/favorites" exact class="linkText"
                       style="margin-top: 7px">Избранное
          </router-link>
        </button>
      </div>
    </div>
    <div class="header"
         style="flex-direction: row; justify-content: space-between; margin-top: 77px; margin-bottom:40px">
      <div class="buttonsFilter">
        <div v-for="val in filterData" :key="val">
          <button @click="()=>{filterMethod(val);searchMethod()}"
                  v-bind:class="[warehouseStore.filter === val? 'buttonFilterClick': 'buttonFilter']">
            {{ val }}
          </button>
        </div>
      </div>
      <form @submit.prevent="searchMethod()" class="searchContainer">
        <input v-model="searchName"  class="inputSearch" @input="debounce(searchMethod)">
        <button class="buttonSearch">
          <img src="../../public/search.png" alt="search">
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse"


export default defineComponent({
  name: 'LayoutComponent',
  data() {
    return {
      searchName: localStorage.getItem("search"),
      filterData: ["Все типы", "Прямые продажи", "Аукцион"]
    }
  },
  setup() {

    const warehouseStore = useWarehouseStore();

    function createDebounce() {
      let timeout:any = null;
      return function (fnc:any) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fnc();
        }, 1000);
      };
    }

    return {
      warehouseStore,
      debounce: createDebounce(),
    }
  },
  methods: {
    filterMethod(value: string) {
      this.warehouseStore.setFilter(value)
    },
    searchMethod() {
      this.warehouseStore.searchData(this.searchName as string)
    },
    linkMethod() {
      this.searchName = ""
      this.warehouseStore.searchData(this.searchName)
    }
  }
});
</script>

<style>
.top {
  display: flex;
  width: 1200px;
  height: 40px;
  margin-right: 360px;
  background: #E0E3EE;
  border-radius: 0 0 10px 10px;
  flex-direction: row-reverse;
}

.header {
  display: flex;
  width: 1200px;
  margin-left: 360px;

}

.container {
  display: flex;
  flex-direction: column;
}

.linkContainer {
  display: flex;
  margin-top: 20px;
  width: 1200px;
  height: 100%;
  flex-direction: row-reverse;

}

.buttonLink {
  width: 86px;
  height: 60px;
  border: none;
  outline: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-weight: 500;
}

.buttonLinkClick {
  width: 86px;
  height: 60px;
  border: none;
  outline: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F4F5F9;
}

.buttonsFilter {
  display: flex;
  width: 304px;
  height: 40px;
  background: #F4F5F9;
  border: 1px solid #E0E3EE;
  border-radius: 10px;
  align-items: center;
}

.buttonFilter {
  border: none;
  outline: none;
  margin-left: 12px;
  color: #969DC3;
  background: #F4F5F9;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
}

.buttonFilterClick {
  border: none;
  outline: none;
  margin-left: 12px;
  color: #2D3B87;
  background: #F4F5F9;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
}

.searchContainer {
  border: 1px solid #E0E3EE;
  border-radius: 10px;
  width: 274px;
  display: flex;
  align-items: center;
}

.buttonSearch {
  width: 40px;
  height: 40px;
  background: #2D3B87;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}

.inputSearch {
  color: #2D3B87;
  width: 228px;
  height: 25px;
  border: none;
  font-size: 15px;
  outline: none;
  font-weight: 400;
  line-height: 100%;
}

.linkText {
  text-decoration: none;
  color: #2D3B87;
  font-weight: 600;
  font-size: 13px;
}
</style>