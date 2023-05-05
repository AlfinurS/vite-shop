<template>
  <div class="goods box">
    <div class="goods__box">
      <div class="catalog goods__card">
        <ul class="catalog__list">
          <li
            class="catalog__item"
            v-for="product in filteredProducts"
            :key="product.id"
          >
            <ItemProduct
              :image="product.image"
              :price="product.price"
              :title="product.title"
              :content="product.content"
              :id="product.id"
            ></ItemProduct>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemProduct from "@/components/ItemProduct.vue";

export type productType = {
  id: number;
  image: string;
  title: string;
  content: string;
  price: number;
};

export default defineComponent({
  name: "ProductsList",
  components: {
    ItemProduct,
  },
  props: {},

  data() {
    return {
      search: "",
      products: [
        {
          id: 1,
          image: "",
          title: "ELLERY X M'O CAPSULE",
          content:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
          price: 52.0,
        },
        {
          id: 2,
          image: "",
          title: "ELLERY X M'O CAPSULE",
          content:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
          price: 52.0,
        },
        {
          id: 3,
          image: "",
          title: "ELLERY X M'O CAPSULE",
          content:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
          price: 52.0,
        },
        {
          id: 4,
          image: "",
          title: "ELLERY X M'O CAPSULE",
          content:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
          price: 52.0,
        },
        {
          id: 5,
          image: "",
          title: "ELLERY X M'O CAPSULE",
          content:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
          price: 52.0,
        },
        {
          id: 6,
          image: "",
          title: "ELLERY X M'O CAPSULE",
          content:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
          price: 52.0,
        },
      ] as productType[],
    };
  },

  computed: {
    filteredProducts(): productType[] {
      if (this.search !== "") {
        const regexp = new RegExp(this.search, "i");
        const filtered = this.products.filter((product) =>
          regexp.test(product.title)
        );
        return filtered;
      }
      return this.products;
    },
  },
});
</script>
