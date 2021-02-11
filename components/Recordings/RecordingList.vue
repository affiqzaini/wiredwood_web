<template>
  <div class="components__recordingList">
    <v-row class="recording-row mx-auto">
      <v-col cols="12" md="6" v-for="(item, index) in tracks" :key="index" class="recording-list">
        <track-item :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import TrackItem from "./TrackItem.vue";

@Component({
  components: {
    TrackItem
  }
})
export default class RecordingList extends Vue {
  tracks: Array<Object> = [
    {
      id: "1",
      name: "Adakah Mataku Terpejam? (Are My Eyes Shut?)",
      artist: "Eirsyad Qawiem, Affiq Zaini",
      image_url: "/images/are-my-eyes-shut.jpg",
      audio_link:
        "https://soundcloud.com/user-663474800/adakah-mataku-terpejam-are-my-eyes-shutby-eirsyad-qawiem-affiq-zaini"
    },
    {
      id: "2",
      name: "Akhirnya Kita Berjumpa (We Meet At Last)",
      artist: "Eirsyad Qawiem, Affiq Zaini",
      image_url: "/images/we-meet-at-last.jpg",
      audio_link:
        "https://soundcloud.com/user-663474800/akhirnya-kita-berjumpa-we-meet-at-last-part-i-by-eirsyad-qawiem-affiq-zaini"
    },
    {
      id: "3",
      name: "Asing (Isolate)",
      artist: "Eirsyad Qawiem",
      image_url: "/images/isolate.jpg",
      audio_link:
        "https://soundcloud.com/user-663474800/asing-isolate-by-eirsyad-qawiem"
    }
  ];
}
</script>

<style lang="scss" scoped>
.recording-row {
  max-width: 1000px;
}

.recording-list{
  &:last-child {
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
