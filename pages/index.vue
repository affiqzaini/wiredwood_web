<template>
  <div class="pages__index mx-auto">
    <v-img
      src="/images/tvcello.jpg"
      max-width="500"
      height="auto"
      class="mx-auto mb-5"
      contain
    />

    <p class="text-caption text-center">
      <b> Nam June Paik </b> “TV Cello”,1976.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  head: {
    title: "Home"
  }
})
export default class PageIndex extends Vue {}
</script>

<style lang="scss" scoped>
.pages__index {
  max-width: 600px;
}
</style>
