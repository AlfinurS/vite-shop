<template>
   <header class="header">
    <div class="header__box">
      <div class="header__wrapp">
          <!-- <router-link :to="{ name: 'Accaunt' }">
            <Logo class="header__wrapp"></Logo>
          </router-link> -->
          123
      </div>
    </div>
  </header>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import Logo from "@/components/Logo.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    Logo,
  },
  })

</script>

<style lang="scss">
@import "@/assets/scss/style.scss";


/* .header {
  background-color: $black-color;
  min-height: 72px;
  &__box {
    padding-top: 18px;
    max-width: 1140px;
    margin-left: 16px;
    margin-right: 16px;
    @media (min-width: 1200px) {
      margin: 0 auto;
    }
  }
  &__wrapp {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  &__button {
    background-color: $black-color;
    border: none;
    cursor: pointer;
  }
  &__menu-list {
    display: flex;
    align-items: center;
  }
  &__menu-item {
    margin-right: 33px;
  }

  &__item-hid {
    @media (max-width: 768px) {
      display: none;
      }
  }
  &__search {
    padding-left: 40px;
  }
  &__nav-wrap {
    display: none;
  }
  &__burger-btn:hover .header__nav-wrap {
    display: block;
  }
  &__navigation {
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    top: 54px;
    right: 0px;
    background-color:$white-color;
    color: $black-color;
    width: 232px;
    min-height: 764px;

    &-title {
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      text-transform: uppercase;
      margin-left: 33px;
      margin-bottom: 24px;
      margin-top: 37px;
    }
    &-subtitle {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: $pink_text-color;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-left: 33px;
    }
    &-sublist {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: $grey-text-color;
      margin-bottom: 20px;
      margin-left: 54px;
    }
  }
  &__navigation-link {
    margin-bottom: 11px;
    cursor: pointer;
  }
  &__close {
    margin-bottom: 16px;
  }
} */
</style>
