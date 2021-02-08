<template>
  <v-app>
    <v-main>
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-row class="full-size">
          <v-col md="3" lg="2">
            <app-sidebar />
          </v-col>
          <v-col>
            <nuxt class="py-5" />
          </v-col>
        </v-row>
      </template>

      <template v-else>
        <mobile-nav />
        <nuxt class="pa-5" />
      </template>
    </v-main>
  </v-app>
</template>

<script>
import { Vue, Component } from "nuxt-property-decorator";
import AppSidebar from "~/components/Layout/AppSidebar.vue";
import MobileNav from "~/components/Layout/MobileNav.vue";

@Component({
  components: {
    AppSidebar,
    MobileNav
  }
})
export default class LayoutDefault extends Vue {}
</script>
