<template>
<v-footer
      v-bind="localAttrs"
      padless
      bottom
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
        color="#bc9b31"
      >
        <v-card-text>
          <v-btn
            v-for="iconfooter in iconsfooter"
            :key="iconfooter"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ iconfooter }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>     

<script>

    export default {
      data () {
        return{

        iconsfooter: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
        ],




        }
      }
    }

</script>