<template>
  <div class="pages__index">
    <v-img src="/images/hero.jpg" max-width="500" height="auto" contain />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class PageIndex extends Vue {}
</script>
