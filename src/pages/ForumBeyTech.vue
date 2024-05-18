<template>
  <v-app id="inspire">
    <v-main>
      <v-navigation-drawer v-model="drawer" app>
        <v-img src="../assets/black-cat-icon.jpg" dark class="pt-5 text-center">
          <v-avatar size="100">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
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

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div class="pt-5 text-center">
            <v-btn @click="goTo('/Home')" v-for="iconforumcard in iconforumcard" :key="iconforumcard">Pat para Voltar
              <v-icon size="20px">{{ iconforumcard }}</v-icon>
            </v-btn>
          </div>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="#fcb69f" dark src="../assets/ronronclub.jpg">
        <template v-slot:img="{ props }">
          <v-img v-bind="props"></v-img>
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

          <v-card class="mx-auto postcard" color="#1d1c1c" dark max-width="600" v-for="(card, index) in posts"
            :key="index">
            <v-card-title>
              <v-icon large left>
                mdi-cat
              </v-icon>
              <span class="text-h6 font-weight-light">PatPost</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
              {{ card.texto }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img class="elevation-6" alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ card.autor }}</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-btn icon @click="card.curtidas++;">
                    <v-icon class="mr-1">
                      mdi-heart
                    </v-icon>
                  </v-btn>
                  <span class="subheading mr-2">{{ card.curtidas }}</span>

                  <v-btn icon @click="card.compartilhamentos++">
                    <v-icon class="mr-1">
                      mdi-share-variant
                    </v-icon>
                  </v-btn>
                  <span class="subheading">{{ card.compartilhamentos }}</span>


                  <Excluir :indice="index" :post="card" @excluir="excluir($event)" />

                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>

          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">

                <v-btn class="mx-10" v-bind="attrs" v-on="on" fab dark color="black" fixed bottom right>
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  <span class="text-h5">Qual seu nome ? </span>
                </v-card-title>
                <v-card-text>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field :counter="80" :rules="nameRules" label="Nome" required
                      v-model="novoAutor"></v-text-field>
                  </v-form>
                </v-card-text>

                <v-card-title>
                  <span class="text-h5">O que eu estou pensando? </span>
                </v-card-title>
                <v-card-text>
                  <v-textarea filled auto-grow label="Escreva sua postagem" rows="4" row-height="30" shaped
                    v-model="novaMensagem"></v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Fechar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="criarPost(novaMensagem, novoAutor)">
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
#content-forum {
  height: 90vh;
}

#button-create {

  margin-top: 50px;
}

.postcard {
  margin: 15px;
}
</style>

<script>
import Excluir from '../components/Excluir.vue';

export default {
  components: {
    Excluir
  },

  data() {
    return {

      novaMensagem: '',
      novoAutor: '',
      dialog: false,
      drawer: null,
      items: [
        { title: 'Chat', icon: 'mdi-message-text-outline', to: '/chat' },
        { title: 'Salvos', icon: 'mdi-shape-square-plus', to: '/salvos' },
      ],
      posts: [
        { autor: 'Miguel', curtidas: 25, compartilhamentos: 52, texto: 'A empresa demonstra um compromisso em superar expectativas e ir além do convencional, buscando constantemente melhorias e inovações.' },
        { autor: 'Rodrigo', curtidas: 55, compartilhamentos: 71, texto: 'Destaca-se a experiência e habilidades técnicas do time da empresa, sugerindo que eles têm o conhecimento e a capacidade para entregar soluções de alta qualidade.' },
        { autor: 'Alicia', curtidas: 30, compartilhamentos: 41, texto: 'A empresa enfatiza sua capacidade de entregar resultados significativos para os clientes, permitindo-lhes focar em seus objetivos enquanto cuida da execução dos projetos.' },
      ],

      iconforumcard: [
        'mdi-paw'
      ],


    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path)
    },

    criarPost(mensagem, autor_mensagem) {
      this.posts.push({ autor: autor_mensagem, curtidas: 0, compartilhamentos: 0, texto: mensagem })
      this.dialog = false
    },
    excluir(indice) {
      this.posts.splice(indice, 1);
      console.log("vai palhacinho chato index " + indice)
    }


  },

}


</script>
