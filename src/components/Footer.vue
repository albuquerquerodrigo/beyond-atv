<template>
<v-footer
      v-bind = "localAttrs"
      padless
      bottom
    >
      <v-card
        flat
        tile
        width = "100%"
        class = "text-center"
        color = "#0d0d0d"
      >
        <v-card-text>
          <v-btn
              v-for = "iconfooter in iconsfooter"
            :key    = "iconfooter"
              class = "mx-4"
            icon
            dark
          >
            <v-icon dark size = "24px">
              {{ iconfooter }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class = "white--text">
          {{ new Date().getFullYear() }} — <strong>RonRonClub</strong>
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
        'mdi-share-variant'
        
        ],




        }
      }
    }

</script>