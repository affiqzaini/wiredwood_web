<template>
  <div class="components__contactDetails">
    <v-container fluid class="">
      <div>
        <p class="mb-0">affiq zaini</p>
        <p>+601 - 11 1111 1111</p>
      </div>

      <div>
        <p class="mb-0">eirsyad qawiem</p>
        <p>+601 - 11 1111 1111</p>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ContactDetails extends Vue {}
</script>
