<template>
  <div v-if="currentProduct">
    <div class="carousel-wrap">
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            v-for="(image, index) in currentProduct.collection"
            :key="image"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <img
              class="bd-placeholder-img carousel__img"
              :src="image"
              alt="image"
              width="597"
              height="724"
            />
          </div>
          <!-- <div class="carousel-item">
            <img
              class="bd-placeholder-img carousel__img"
              src="/img/new_product/men1.webp"
              alt="man coat"
              width="597"
              height="724"
            />
          </div>
          <div class="carousel-item">
            <img
              class="bd-placeholder-img carousel__img"
              :src="currentProduct.image"
              :alt="currentProduct.title"
              width="597"
              height="724"
            />
          </div> -->
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!--     <div class="catalog__item-wrapper">
      <img
        class="catalog__image"
        :src="currentProduct.image"
        :alt="currentProduct.title"
      />
    </div> -->
  </div>
  <div v-else>
    <p>Нет данных</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { productType } from "@/types/common";
import { axios } from "@/main";

export default defineComponent({
  name: "ProductPage",
  components: {},
  data() {
    return {
      productId: this.$route.params.id,
      products: [] as productType[],
    };
  },

  computed: {
    currentProduct(): productType | null {
      const productFind = this.products.find(
        (product) => product.id === +this.productId
      );
      if (productFind) {
        return productFind;
      }
      return null;
    },
  },

  methods: {
    loadProducts() {
      const url = "products.json";
      axios
        .get(url)
        .then(({ data }) => {
          this.products = data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    //console.log("ok");
    this.loadProducts();
  },
});
</script>
