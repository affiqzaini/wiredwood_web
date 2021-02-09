<template>
  <div class="pages__recordings">
    <recording-list />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import RecordingList from "~/components/Recordings/RecordingList.vue";

@Component({
  head: {
    title: "Recordings"
  },
  components: {
    RecordingList
  }
})
export default class PageRecordings extends Vue {}
</script>
