<template>
  <div class="catalog__hover">
    <div class="catalog__add-wrapper">
      <router-link
        :to="{ name: 'CartPage' }"
        class="btn-plain"
        @click="addProducts"
      >
        <iconCart
          class="btn-plain-icon"
          alt="bag"
          width="24"
          height="24"
        ></iconCart>
        <span class="btn-plain-text">Add to Cart</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconCart from "@/components/iconCart.vue";
import { productType } from "@/types/common";

export default defineComponent({
  name: "BtnAddComponent",
  components: {
    iconCart,
  },
  props: {
    src: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      products: [] as productType[],
    };
  },

  methods: {
    addProduct() {
      /*               const index = this.products.findIndex((item) => item.id_product === product.id_product);
              let productFind = this.cart.find(product => product.id_product === this.products[index].id_product); */
      console.log(this.products);
      /*               if (productFind) {
                  ++productFind.quantity;
                  //this.showCart(productFind)
              } else {
                  const cartProduct = JSON.parse(JSON.stringify(product))
                  cartProduct.quantity = 1;
                  this.cart.push(cartProduct);
              console.log(this.cart);
              } */
    },
  },
});
</script>
