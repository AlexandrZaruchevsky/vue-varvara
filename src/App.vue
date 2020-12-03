<template>
<v-app>
  <v-card class="mx-auto overflow-hidden hhh" min-height="300">
    <v-app-bar  color="teal">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Varvara</v-toolbar-title>
      <v-divider inset vertical class="mx-2"></v-divider>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/alfavit">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Алфавит</v-list-item-title>
          </v-list-item>

          <v-list-item to="/audio">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container grid-list-xs>
        <router-view />
      </v-container>
    </v-main>
  </v-card>
</v-app>
  <!-- <v-app>
    <v-app-bar app color="teal" dark>
      <div class="d-flex align-center">
        <div class="font-weight-bold">
          <router-link to="/" text tag="h1" class="pointer">
            Varvara
          </router-link>
        </div>
      </div>
      <v-divider class="mx-2" inset vertical> </v-divider>
      <div class="d-flex align-center">
        <v-btn to="/alfavit" text>
          Алфавит
        </v-btn>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container grid-list-xs>
        <router-view /> 
      </v-container>
    </v-main>
  </v-app> -->
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
.hhh{
  height: 100vh;
  width: 100vw;
}
</style>
