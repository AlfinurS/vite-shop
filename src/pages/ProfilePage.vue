<template>
  <section class="navigation">
    <div class="navigation__wrapper">
      <h2 class="navigation__titel">registration</h2>
      <nav>
        <ul class="navigation__list">
          <li class="navigation__item">
            <router-link class="navigation__link" :to="{ name: 'HomePage' }"
              >home/
            </router-link>
          </li>
          <li class="navigation__item">
            <a class="navigation__link navigation__link--active" href="#"
              >registration</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>

  <RegistrationForm></RegistrationForm>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    RegistrationForm,
  },
});
</script>
