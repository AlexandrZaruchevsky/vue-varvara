<template>
  <v-app>
    <v-app-bar color="teal" app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title
        ><span class="white--text">Varvara</span></v-toolbar-title
      >
      <v-divider inset vertical class="mx-2"></v-divider>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/alfavit">
            <v-list-item-icon>
              <v-icon>mdi-alphabet-latin</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Алфавит</v-list-item-title>
          </v-list-item>

          <v-list-item to="/qwe">
            <v-list-item-icon>
              <v-icon>mdi-atom-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Алфавит</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
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
.hhh {
  height: 100vh;
  width: 100vw;
}
</style>
