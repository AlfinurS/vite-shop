<template>
  <section>
    <div class="promo">
      <router-link :to="{ name: 'CatalogPage' }" class="promo__wrapp">
        <Promo></Promo>
      </router-link>

      <div class="promo__content">
        <div class="promo__content-all">
          <div class="promo__content-headline">
            <h2 class="promo__content-titel text-focus-in">the brand</h2>
            <span class="promo__text text-focus-in">of luxerious</span>
            <span class="promo__text promo__text--pink text-focus-in"
              >fashion</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="stock box">
    <div class="stock__box">
      <ul class="stock__list">
        <li class="stock__card">
          <div class="stock__content">
            <p class="stock__text">30% OFF</p>
            <p class="stock__pink">for women</p>
          </div>
          <a href="#" class="stock__item-link">
            <img
              class="stock__image"
              src="/img/banner_mini1.png"
              alt="man"
              width="360"
              height="260"
            />
          </a>
        </li>
        <li class="stock__card">
          <div class="stock__content">
            <p class="stock__text">hot deal</p>
            <p class="stock__pink">for men</p>
          </div>
          <a href="#" class="stock__item-link">
            <img
              class="stock__image"
              src="/img/banner_mini2.png"
              alt="man"
              width="360"
              height="260"
            />
          </a>
        </li>
        <li class="stock__card">
          <div class="stock__content">
            <p class="stock__text">new arrivals</p>
            <p class="stock__pink">for kids</p>
          </div>
          <a href="#" class="stock__item-link">
            <img
              class="stock__image"
              src="/img/banner_mini3.png"
              alt="man"
              width="360"
              height="260"
            />
          </a>
        </li>
        <li class="stock__card stock__card--wide">
          <div class="stock__content">
            <p class="stock__text">luxirous & trendy</p>
            <p class="stock__pink">accesories</p>
          </div>
          <a href="#" class="stock__link-wide">
            <picture class="">
              <source
                srcset="/img/banner_small.jpg"
                media="(max-width: 1199px)"
              />
              <source srcset="/img/banner.png" media="(min-width: 1200px)" />
              <img class="stock__image" src="/img/banner.png" alt="man" />
            </picture>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <section class="catalog box">
    <h2 class="catalog__headline">Fetured Items</h2>
    <p class="catalog__text">
      Shop for items based on what we featured in this week
    </p>
    <ul class="catalog__list">
      <li class="catalog__item">
        <div class="catalog__item-wrapper">
          <img
            class="catalog__image"
            src="/img/new_product/men3.webp"
            alt="product"
          />
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
          <p class="catalog__content-name">ellery x m'o capsule</p>
          <p class="catalog__content-text">
            Known for her sculptural takes on traditional tailoring, Australian
            arbiter of cool Kym Ellery teams up with Moda Operandi.
          </p>
          <p class="catalog__content-price">$52.00</p>
        </div>
      </li>
      <li class="catalog__item">
        <div class="catalog__item-wrapper">
          <img
            class="catalog__image"
            src="/img/new_product/men1.webp"
            alt="product"
          />
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
          <p class="catalog__content-name">ellery x m'o capsule</p>
          <p class="catalog__content-text">
            Known for her sculptural takes on traditional tailoring, Australian
            arbiter of cool Kym Ellery teams up with Moda Operandi.
          </p>
          <p class="catalog__content-price">$52.00</p>
        </div>
      </li>
      <li class="catalog__item">
        <div class="catalog__item-wrapper">
          <img
            class="catalog__image"
            src="/img/new_product/men7.webp"
            alt="product"
          />
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
          <p class="catalog__content-name">ellery x m'o capsule</p>
          <p class="catalog__content-text">
            Known for her sculptural takes on traditional tailoring, Australian
            arbiter of cool Kym Ellery teams up with Moda Operandi.
          </p>
          <p class="catalog__content-price">$52.00</p>
        </div>
      </li>
      <li class="catalog__item">
        <div class="catalog__item-wrapper">
          <img
            class="catalog__image"
            src="/img/new_product/women1.webp"
            alt="product"
          />
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
          <p class="catalog__content-name">ellery x m'o capsule</p>
          <p class="catalog__content-text">
            Known for her sculptural takes on traditional tailoring, Australian
            arbiter of cool Kym Ellery teams up with Moda Operandi.
          </p>
          <p class="catalog__content-price">$52.00</p>
        </div>
      </li>
      <li class="catalog__item">
        <div class="catalog__item-wrapper">
          <img
            class="catalog__image"
            src="/img/new_product/women2.webp"
            alt="product"
          />
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
          <p class="catalog__content-name">ellery x m'o capsule</p>
          <p class="catalog__content-text">
            Known for her sculptural takes on traditional tailoring, Australian
            arbiter of cool Kym Ellery teams up with Moda Operandi.
          </p>
          <p class="catalog__content-price">$52.00</p>
        </div>
      </li>
      <li class="catalog__item">
        <div class="catalog__item-wrapper">
          <img
            class="catalog__image"
            src="/img/new_product/women3.webp"
            alt="product"
          />
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
          <p class="catalog__content-name">ellery x m'o capsule</p>
          <p class="catalog__content-text">
            Known for her sculptural takes on traditional tailoring, Australian
            arbiter of cool Kym Ellery teams up with Moda Operandi.
          </p>
          <p class="catalog__content-price">$52.00</p>
        </div>
      </li>
    </ul>
    <a class="btn-primary catalog__btn-more" href="catalog.html"
      ><div>Browse All Product</div></a
    >
  </section>
  <section class="advantage">
    <div class="advantage__wrapp">
      <div class="advantage__delivery">
        <img class="advantage__pic" src="/img/svg/icon1.svg" alt="delivery" />
        <h2 class="advantage__titel">Free Delivery</h2>
        <p class="advantage__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="advantage__sales">
        <img class="advantage__pic" src="/img/svg/icon2.svg" alt="sales" />
        <h2 class="advantage__titel">Sales & discounts</h2>
        <p class="advantage__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="advantage__assurance">
        <img class="advantage__pic" src="/img/svg/icon3.svg" alt="assurance" />
        <h2 class="advantage__titel">Quality assurance</h2>
        <p class="advantage__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Promo from "@/components/Promo.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Promo,
  },
});
</script>
