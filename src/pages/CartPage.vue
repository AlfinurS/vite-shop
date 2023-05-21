<template>
  <section class="cart box">
    <div class="cart__product"></div>
    <ul>
      <li class="cart__item" v-for="product in cartProducts" :key="product.id">
        <div :dataProps="product.id">{{ product.id }}</div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions, mapGetters } from "vuex";
import { productType } from "@/types/common";
import { productConst } from "@/constants/common";

export default defineComponent({
  name: "CartPage",
  components: {},

  props: {
    dataProps: {
      type: Object as PropType<productType>,
      default: () => productConst,
    },
  },

  data() {
    return {
      products: [] as productType[],
      cart: [],
    };
  },

  computed: {
    ...mapGetters({
      cartProducts: "cart/cartProducts",
    }),
  },

  methods: {
    ...mapActions({
      addCartProduct: "cart/addCartProduct",
    }),

    addProduct() {
      console.log("ok");
    },
  },
});
</script>
