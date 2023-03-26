<template>
  <div class="container">
    <div v-for="item in data" class="item">
      <div style="display: flex">
        <img :src="item.image" alt="image" class="image">
        <div class="itemDataContainer">
          <div class="textInfoType">{{ item.type }}
          </div>
          <div style="font-weight: 600; font-size: 15px; line-height: 125%; color: #2D3B87;">{{ item.name }}</div>
          <div class="textType">
            <img src="../../public/geo.png" alt="geolocation">
            {{ item.address }}
          </div>
          <div>
            <div class="textInfoType">Продавец</div>
            <div class="textInfo">{{ item.sales }}</div>
          </div>
          <div>
            <div class="textInfoType">Вид товара</div>
            <div class="textType">{{ item.productType }}
            </div>
          </div>
          <div class="textDescription">{{ item.description }}</div>
        </div>
      </div>
      <div class="containerCount">
        <div style="font-weight: 600; font-size: 20px; line-height: 100%; color: #2D3B87;">{{ item.price }}{{
            "&#8381;"
          }}
        </div>
        <div>
          <div class="textType">Количество</div>
          <div class="textInfo">{{ item.count }}</div>
        </div>
        <div>
          <div class="textType">Стоимость за штуку</div>
          <div class="textInfo">{{ item.pricePiece }}</div>
        </div>
        <div>
          <button v-if="$route.path === '/deals'" @click="warehouseStore.toPaid(item)"
                  v-bind:class="[item.paid? 'buttonPaidClick': 'buttonPaid']">
            {{ item.paid ? 'Оплачено' : 'Оплатить' }}
          </button>
          <button v-else @click="warehouseStore.addToDeals(item)" class="buttonAddToDeals">Добавить в сделки</button>
          <button @click="warehouseStore.addToFavorite(item)" class="buttonAddToFavorite">
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
}
.buttonPaid:hover {
  background-color: #3e8e41
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
}

.buttonAddToFavorite {
  width: 40px;
  height: 40px;
  background: #F4F5F9;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
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
}
</style>