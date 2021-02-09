<template>
  <v-app>
    <app-sidebar />
    <v-main>
      <nuxt class="px-8 mb-12" />
    </v-main>
  </v-app>
</template>

<script>
import { Vue, Component } from "nuxt-property-decorator";
import AppSidebar from "~/components/Layout/AppSidebar.vue";

@Component({
  components: {
    AppSidebar
  }
})
export default class LayoutDefault extends Vue {}
</script>

<style lang="scss" scoped>
.column {
  padding: 0px !important;
}
</style>
