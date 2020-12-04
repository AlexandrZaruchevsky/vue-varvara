<template>
  <v-container>
    <v-card color="teal lighten-5">
      <v-card-title class="teal lighten-1">
        <span class="white--text">Алфавит</span>
      </v-card-title>

      <v-container>
        <v-card>
          <v-card-text>
            <bukva class="mx-auto" :buk="alfavit[current]" />
          </v-card-text>
        </v-card>
      </v-container>

      <v-card-actions class="d-flex align-center">
        <v-btn text @click="navigation('back')">
          Back
        </v-btn>
        <v-spacer />
        <v-btn text @click="navigation('next')">
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Bukva from "../components/Bukva.vue";

import { mapGetters } from 'vuex'

export default {
  name: "Alfavit",
  components: {
    Bukva,
  },
  data() {
    return {
      bukvyRu: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",
      current: 0,
    };
  },
  computed: {
    listRu: function() {
      return this.bukvyRu.split("");
    },
    ...mapGetters({
      alfavit: "GET_ALFAVIT_RU",
    })
  },
  methods: {
    navigation: function(event) {
      if (event == "next") {
        if (this.current < 32) {
          this.increment();
        } else {
          this.current = 0;
        }
      }
      if (event == "back") {
        if (this.current > 0) {
          this.decriment();
        } else if (this.current == 0) {
          this.current = 32;
        }
      }
    },
    increment: function() {
      this.current++;
    },
    decriment: function() {
      this.current--;
    },
  },
};
</script>
<style lang="scss" scoped>
.font-alfavit {
  font-size: 20em;
}
</style>
