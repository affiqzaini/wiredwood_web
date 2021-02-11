<template>
  <v-container class="components__appSidebar">
    <v-img
      contain
      width="200"
      src="/images/logo.png"
      class="text-link mb-5 mx-auto"
      @click.prevent="$router.push('/')"
    />

    <div class="center-all">
      <p
        v-for="(item, index) in routes"
        :key="index"
        class="text-link mx-5"
        :class="path.includes(item.to) ? 'font-weight-bold' : null"
        @click.prevent="$router.push(item.to)"
      >
        {{ item.title }}
      </p>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class AppSidebar extends Vue {
  routes: Array<Object> = [
    { title: "About", to: "about" },
    { title: "Recordings", to: "recordings" },
    { title: "Contact", to: "contact" },
  ];

  get path() {
    return this.$route.path;
  }
}
</script>
