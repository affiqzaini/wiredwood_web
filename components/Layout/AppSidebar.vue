<template>
  <div class="components__appSidebar">
    <v-container class="sidebar pa-5">
      <p class="text-h5 text-link" @click.prevent="$router.push('/')">
        Wired Wood Sound
      </p>

      <p
        v-for="(item, index) in routes"
        :key="index"
        class="text-link"
        :class="path.includes(item.to) ? 'font-weight-bold' : null"
        @click.prevent="$router.push(item.to)"
      >
        {{ item.title }}
      </p>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class AppSidebar extends Vue {
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
