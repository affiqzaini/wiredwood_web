<template>
  <div class="pages__about">
    <about-details />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import AboutDetails from "~/components/About/AboutDetails.vue";

@Component({
  head: {
    title: "About"
  },
  components: {
    AboutDetails
  }
})
export default class PageAbout extends Vue {}
</script>
