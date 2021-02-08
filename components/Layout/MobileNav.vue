<template>
  <div class="components__mobileNav">
    <div class="center-all flex-column pa-3">
      <p class="text-h6" @click.prevent="$router.push('/')">Wired Wood Sound</p>

      <div class="center-evenly full-width">
        <p
          v-for="(item, index) in routes"
          :key="index"
          class="text-link"
          :class="path.includes(item.to) ? 'font-weight-bold' : null"
          @click.prevent="$router.push(item.to)"
        >
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class MobileNav extends Vue {
  routes: Array<Object> = [
    { title: "About", to: "about" },
    { title: "Contact", to: "contact" },
    { title: "Recordings", to: "recordings" }
  ];

  get path() {
    return this.$route.path;
  }
}
</script>
