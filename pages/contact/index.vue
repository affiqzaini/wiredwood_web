<template>
  <div class="pages__contact">
    <contact-details />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ContactDetails from "~/components/Contact/ContactDetails.vue";

@Component({
  head: {
    title: "Contact"
  },
  components: {
    ContactDetails
  }
})
export default class PageContact extends Vue {}
</script>
