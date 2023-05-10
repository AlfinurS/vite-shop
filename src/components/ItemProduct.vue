<template>
  <router-link
    :to="{ name: 'ProductPage', params: { id: dataProps.id } }"
    class="catalog__item-wrapper"
  >
    <img
      class="catalog__image"
      :src="`img/new_product/${dataProps.image}`"
      :alt="dataProps.title"
    />

    <div class="catalog__hover">
      <div class="catalog__add-wrapper"></div>
    </div>
  </router-link>
  <div class="catalog__content">
    <p class="catalog__content-name">{{ dataProps.title }}</p>
    <p class="catalog__content-text">
      Known for her sculptural takes on traditional tailoring, Australian
      arbiter of cool Kym Ellery teams up with Moda Operandi.
    </p>
    <p class="catalog__content-price">$ {{ dataProps.price }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { productType } from "@/types/common";
import { productConst } from "@/constants/common";

export default defineComponent({
  name: "ItemProduct",
  components: {},
  props: {
    dataProps: {
      type: Object as PropType<productType>,
      default: () => productConst,
    },
  },
});
</script>
