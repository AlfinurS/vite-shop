<template>
  <header class="header">
    <div class="header__box">
      <div class="header__wrapp">
        <router-link :to="{ name: 'HomePage' }">
          <Logo class="header__wrapp"></Logo>
        </router-link>
        <div class="header__menu-list">
          <iconBurger
            class=""
            @click="toggleDrop"
            width="18"
            :height="18"
          ></iconBurger>
          <div class="header__nav-wrap">
            <MenuHeader id="menu__header" v-if="isShowMenu"></MenuHeader>
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
  methods: {
    toggleDrop() {
      if (!this.isShowMenu) {
        this.isShowMenu = true;
        setTimeout(() => {
          window.addEventListener("click", this.awayClick);
        }, 0);
      } else {
        this.isShowMenu = false;
        window.removeEventListener("click", this.awayClick);
      }
    },

    awayClick(e: MouseEvent) {
      const selectOpened: any = document.querySelector("#menu__header");
      if (!selectOpened) return;
      const clickX = e.pageX;
      const clickY = e.pageY;
      const dropLeft = selectOpened.offsetLeft;
      const dropRight = selectOpened.offsetLeft + selectOpened.clientWidth;
      const dropTop = selectOpened.offsetTop;
      const dropBottom = selectOpened.offsetTop + selectOpened.clientHeight;
      if (
        clickX < dropLeft ||
        clickX > dropRight ||
        clickY < dropTop ||
        clickY > dropBottom
      ) {
        this.toggleDrop();
      }
    },
  },

  unmounted() {
    window.removeEventListener("click", this.awayClick);
  },
});
</script>
