<template>
  <v-app id="background">
    <v-card class="mx-auto" max-width="400">
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="login" color="primary">Login</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="createAcc" color="secondary">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      }).then(() => {
        this.$router.push('/Home');
      }).catch(() => {
        this.$router.push('/');
      });
    },
    goTo(path) {
      this.$router.push(path)
    },

    createAcc() {
      this.$store.dispatch("create", {
        email: this.email,
        password: this.password,
      });
    }
  }
};
</script>

<style scoped>
.v-card {
  margin-top: 50px;
}

#background {
  background: url(/src/assets/fundo_gato.png);
}
</style>