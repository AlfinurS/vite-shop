<template>
  <header class="header">
    <div class="header__box">
      <div class="header__wrapp">
        <router-link :to="{ name: 'HomePage' }">
          <Logo class="header__wrapp"></Logo>
        </router-link>
        <div class="header__menu-list">
          <iconBurger
            @click="isShowMenu = !isShowMenu"
            class="header__menu-item header__burger-btn"
            width="18"
            :height="18"
          ></iconBurger>
          <div class="header__nav-wrap">
            <MenuHeader v-if="isShowMenu"></MenuHeader>
          </div>
          <div class="header__menu-item">
            <router-link :to="{ name: 'ProfilePage' }">
              <iconProfile></iconProfile>
            </router-link>
          </div>
          <div class="header__menu-item">
            <router-link :to="{ name: 'CartPage' }">
              <iconCart></iconCart>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/Logo.vue";
import iconBurger from "@/components/iconBurger.vue";
import iconProfile from "@/components/iconProfile.vue";
import iconCart from "@/components/iconCart.vue";
import MenuHeader from "@/components/MenuHeader.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    Logo,
    iconBurger,
    iconProfile,
    iconCart,
    MenuHeader,
  },

  data() {
    return {
      isShowMenu: false,
    };
  },
});
</script>
