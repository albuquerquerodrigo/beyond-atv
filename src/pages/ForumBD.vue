<template>
  <v-app   id="inspire">
    <v-main>
      <v-navigation-drawer
        v-model="drawer"
        app
        >
    <v-img
    src="../assets/black-cat-icon.jpg"
    dark
    class="pt-5 text-center"
    >
    <v-avatar
    size="100"
    >
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John">
    </v-avatar>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Admin
          </v-list-item-title>
          <v-list-item-subtitle>
            Online
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-img>
      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      <div
       class="pt-5 text-center">
      <v-btn  
        @click="goTo('/')"
        v-for="iconforumcard in iconforumcard" :key="iconforumcard" 
        >Pat para Voltar 
        <v-icon size="20px">{{ iconforumcard }}</v-icon>
      </v-btn>
      </div>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#fcb69f"
      dark
      src="../assets/ronronclub.jpg"
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
         
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Fórum</v-app-bar-title>

      <v-spacer></v-spacer>
      
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!--main project -->

  <div id="content-forum">
    
  <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
      class="mx-10"
      v-bind="attrs"
      v-on="on"
      fab
      dark
      color="black"
      fixed
      bottom
      right

    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
      </template>
      <v-card
    
      >
      
        <v-card-title>
          <span class="text-h5">O que eu estou pensando? </span>
        </v-card-title>
        <v-card-text>
          <v-textarea
          filled
          auto-grow
          label="Four rows"
          rows="4"
          row-height="30"
          shaped
        ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="sendMessage()"
          >
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

</div>


       </v-main>
  </v-app>
</template>

<style>
  #content-forum{
    height: 90vh;
}
  #button-create{
    
    margin-top: 50px;
  }
</style>

<script>

  export default {
   

    data () { 
      return{
        dialog: false,
        drawer: null,
        items: [
        { title: 'Chat', icon: 'mdi-message-text-outline', to: '/chat' },
        { title: 'Salvos', icon: 'mdi-shape-square-plus', to: '/salvos' }
      ],

        iconforumcard:[
        'mdi-paw'
      ],
      
    }
},
  methods: {
    goTo(path) {
      this.$router.push(path)
    },
    // sendMessage (){
    //   const post = {
        
    //   }
    // }
  },

}


</script>

