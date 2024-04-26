<template>

  <div id="main-content">
  <div 
    v-for="(classe,index) in nova" :key="index"
        class="pt-10 "
    >
  <v-card outlined>
    <v-list-item three-line>
      
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ classe.nome }}
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>
    
            <v-icon size="45px"
            v-for="iconforumcard in iconforumcard"
            :key="iconforumcard"
            class="mx-4"
            icon>
              {{ iconforumcard }}
            </v-icon>
    </v-list-item>

    <v-card-actions>
      <v-btn
      @click="goTo(classe.route)"
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
  </div>
</template>

<style>
  #main-content{
    height: 90vh;
}
</style>

<script>
  export default{
    data () {
    return{

        
      iconsfooter: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
        ],

        iconforumcard: [
        'mdi-cat'
        ],

        nova: [
          { nome: "Forum - Banco de Dados", route: "/ForumBancoDeDados" },
          { nome: "Forum - POO", route: "/ForumPOO" },
          { nome: "Forum - BeyondTech", route: "/ForumBeyondTech" }
        ]


    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path)
    }
  },
  
  
  }

  
</script>