<template>
  <div class="catalog__item-wrapper">
    <a href="#" class="catalog__image-wrapper">
      <img
        class="catalog__image"
        :src="dataProps.image"
        :alt="dataProps.title"
      />
    </a>
    <div class="catalog__hover">
      <div class="catalog__add-wrapper">
        <button class="btn-plain" type="button">
          <img
            class="btn-plain-icon"
            src="/img/svg/bag2.svg"
            alt="bag"
            width="24"
            height="24"
          />
          <span class="btn-plain-text">Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
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
