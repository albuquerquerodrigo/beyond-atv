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
  
        <v-app-bar-title>Chat</v-app-bar-title>
  
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
      
         </v-main>
    </v-app>
  </template>
  
  <style>
    #content-forum-bd{
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
  
  