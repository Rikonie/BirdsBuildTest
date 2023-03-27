<template>
  <div class="container">
    <div v-for="item in data" class="item">
      <div style="display: flex">
        <img :src="item.image" alt="image" class="image">
        <div class="itemDataContainer">
          <div class="textInfoType">{{ item.type }}
          </div>
          <div
              style="font-weight: 600; font-size: 15px; line-height: 125%; color: #2D3B87; margin-top: 15px; height: 20px">
            {{ item.name }}
          </div>
          <div class="textType"
               style="margin-top: 17px; background: #F4F5F9; border-radius: 5px; width: fit-content; display: flex;align-items: center;">
            <img src="../../public/geo.png" alt="geolocation"
                 style="margin-left: 10px;margin-top: 4px; margin-bottom: 4px;width: 10px; height: 14px;">
            <span style="margin: 5px 8px 5px 6px;">{{ item.address }}</span>
          </div>
          <div style="margin-top: 12px">
            <span class="textInfoType">Продавец </span>
            <span class="textInfo">{{ item.sales }}</span>
          </div>
          <div style="background: #F4F5F9; border-radius: 10px; margin-top: 12px; width: fit-content;">
            <div class="textInfoType" style="margin-left: 8px;margin-top: 8px; margin-right: 8px">Вид товара</div>
            <div class="textType" style="margin: 6px 8px 8px;">{{ item.productType }}
            </div>
          </div>
          <div class="textDescription" style="margin-top: 12px">{{ item.description }}</div>
        </div>
      </div>
      <div class="containerCount">
        <div
            style="font-weight: 600; font-size: 20px; line-height: 100%; color: #2D3B87; margin-top: 20px; margin-left: 20px; margin-right: 20px">
          {{ item.price }} {{ "&#8381;" }}
        </div>
        <div
            style="margin-left: 20px; margin-right: 20px; margin-top: 13px; display: flex; justify-content: space-between;">
          <span class="textType">Количество</span>
          <span class="textInfo">{{ item.count }} шт.</span>
        </div>
        <div
            style="margin-left: 20px; margin-right: 20px; margin-top: 11px; display: flex; justify-content: space-between;">
          <span class="textType">Стоимость за штуку</span>
          <span class="textInfo">{{ item.pricePiece }} {{ "&#8381;" }}</span>
        </div>
        <div style="margin-top: 215px">
          <button v-if="$route.path === '/deals'" @click="warehouseStore.toPaid(item)"
                  v-bind:class="[item.paid? 'buttonPaidClick': 'buttonPaid']" :disabled="!!item.paid">
            {{ item.paid ? 'Оплачено' : 'Оплатить' }}
          </button>
          <button v-else @click="warehouseStore.addToDeals(item)" class="buttonAddToDeals">Добавить в сделки</button>
          <button v-if="item.isFavorite" @click="warehouseStore.addToFavorite(item)" class="buttonAddToFavorite"
                  style="background: #2D3B87;">
            <img src="../../public/favoriteAdd.png" alt="Избранное">
          </button>
          <button v-else @click="warehouseStore.addToFavorite(item)" class="buttonAddToFavorite"
                  style="background: #F4F5F9;">
            <img src="../../public/favorite.png" alt="Избранное">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useWarehouseStore} from "@/store/warehouse";
import {CommonData} from "@/models/commonData";


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
  },

});

</script>
<style>
.container {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  width: 1166px;
  height: 366px;
  margin-left: 361px;
  border: 1px solid #E0E3EE;
  border-radius: 20px;
  margin-bottom: 40px;
  flex-direction: row;
  justify-content: space-between;
}

.image {
  height: 256px;
  width: 256px;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 20px;
}

.containerCount {
  display: flex;
  flex-direction: column;
  border: 1px solid #E0E3EE;
  border-radius: 20px;
  height: 366px;
}

.itemDataContainer {
  display: flex;
  flex-direction: column;
  margin-top: 23px;
  margin-left: 20px;
}

.textInfoType {
  color: #969DC3;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
}

.textType {
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #616CA5;
}

.textDescription {
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  color: #2D3B87;
}

.textInfo {
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  color: #2D3B87;
}

.buttonPaid {
  background: #69C57F;
  border-radius: 10px;
  width: 222px;
  height: 40px;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-right: 12px;
}

.buttonPaid:hover {
  background-color: #3e8e41
}

.buttonPaid:active {
  background-color: #69C57F;
  box-shadow: 0 2px #3e8e41;
  transform: translateY(4px);
}

.buttonPaidClick {
  background: #FFFFFF;
  border: 1px solid #E0E3EE;
  border-radius: 10px;
  width: 222px;
  height: 40px;
  outline: none;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  color: #969DC3;
  cursor: not-allowed;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-right: 12px;
}

.buttonAddToFavorite {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 20px;
  margin-right: 20px;
}

.buttonAddToDeals {
  background: #F4F5F9;
  border-radius: 10px;
  width: 222px;
  height: 40px;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  color: #2D3B87;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-right: 12px;
}

.buttonAddToDeals:hover{
  background: #bcbec0;
}

.buttonAddToDeals:active {
  background-color: #F4F5F9;
  box-shadow: 0 2px #bcbec0;
  transform: translateY(4px);
}
</style>