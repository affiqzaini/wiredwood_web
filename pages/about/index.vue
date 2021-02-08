<template>
  <div class="pages__about center-all flex-column">
    <v-img src="/images/USSR1.jpg" width="auto" height="500" contain />

    <p class="about-text">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
      officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
      repudiandae sint et molestiae non recusandae.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class PageAbout extends Vue {}
</script>

<style lang="scss" scoped>
.about-text {
  max-width: 600px;
  margin-top: 20px;
  text-align: justify;
}
</style>
