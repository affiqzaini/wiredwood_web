<template>
  <div class="components__aboutDetails">
    <!-- <img src="/images/USSR1.jpg" class="image" /> -->

    <p class="about-text">
      Wired Wood is a sound artist collective composed of Eirsyad Qawiem and
      Affiq Zaini (b. 1996) that is based in Ampang, Selangor. They work with
      various digital (and acoustic) instruments and recordings. They are most
      interested in composing and collaging sounds to form atmosphere, mood and
      texture that are significant for their works which mainly concentrate on
      the relation between the aural and the visual. Working in the grey area
      between sound art and music, Wired Wood explores their common interests
      through the art of scoring.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class AboutDetails extends Vue {}
</script>

<style lang="scss" scoped>
.components__aboutDetails {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about-text {
  max-width: 400px;
  margin-top: 20px;
  margin-bottom: 60px;
  text-align: justify;
}

.image {
  width: 300px;
  height: 300px;
}
</style>
