<template>
  <div class="components__trackItem">
    <v-card tile class="track-card pa-5 elevation-0">
      <a
        :href="item.audio_link"
        target="_blank"
        class="text-decoration-none"
        rel="noopener noreferrer"
      >
        <v-img
          :src="item.image_url"
          max-width="500"
          aspect-ratio="1"
          class="mb-3 mx-auto"
        />
        <div class="card-text text-center">
          <p class="mb-0 text-subtitle-2">
            {{ item.name }}
          </p>
          <p class="card-text text-caption font-italic">
            {{ `Artists: ${item.artist} ` }}
          </p>
        </div>
      </a>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class TrackItem extends Vue {
  @Prop({ type: Object, required: true }) item!: Object;
}
</script>

<style lang="scss" scoped>
.track-card {
  &:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.5);
    cursor: pointer;
  }
}

.card-text {
  text-decoration: none !important;
  color: #2b2b2b;
}
</style>
