import Vue from "vue";
import Vuex from "vuex";
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routes/router';
import { auth } from './config/index.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

Vue.use(Vuex);
Vue.config.productionTip = false


const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    create({ commit }, payload) {
      const { email, password } = payload;
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          commit("logAction", "Usuário criado");
          console.log("Usuário criado!", result);
        })
        .catch((error) => {
          alert(error);
        });
    },

    login({ commit }, payload) {
      const { email, password } = payload;
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log("Usuário logado!", result);
          commit("setUser", result.user)
        })
        .catch((error) => {
          alert(error);
        });
    },

  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')