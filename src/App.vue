<template>
  <v-app>
    <v-app-bar
      app
      color=""
    >
      <div class="d-flex align-center">
        <div class="font-weight-bold">
          <router-link
            to="/"
            text
            tag="h1"
            class="pointer"
          >
            Varvara
          </router-link>
        </div>
      </div>
      <v-divider
        class="mx-2"
        inset
        vertical
      >
      </v-divider>
      <div class="d-flex align-center">
        <v-btn
            to="/alfavit"
            text
          >
            Алфавит
          </v-btn>
      </div>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({

  }),
};
</script>
<style lang="scss" scoped>
  .pointer{
    cursor: pointer;
  }
</style>