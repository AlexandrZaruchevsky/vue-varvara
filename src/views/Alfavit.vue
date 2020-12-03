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

export default {
  name: "Alfavit",
  components: {
    Bukva,
  },
  data() {
    return {
      bukvyRu: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",
      current: 0,
      alfavit: [
        { bukva: "А", sound: "01.3gpp" },
        { bukva: "Б", sound: "02.3gpp" },
        { bukva: "В", sound: "03.3gpp" },
        { bukva: "Г", sound: "04.3gpp" },
        { bukva: "Д", sound: "05.3gpp" },
        { bukva: "Е", sound: "06.3gpp" },
        { bukva: "Ё", sound: "07.3gpp" },
        { bukva: "Ж", sound: "08.3gpp" },
        { bukva: "З", sound: "09.3gpp" },
        { bukva: "И", sound: "10.3gpp" },
        { bukva: "Й", sound: "11.3gpp" },
        { bukva: "К", sound: "12.3gpp" },
        { bukva: "Л", sound: "13.3gpp" },
        { bukva: "М", sound: "14.3gpp" },
        { bukva: "Н", sound: "15.3gpp" },
        { bukva: "О", sound: "16.3gpp" },
        { bukva: "П", sound: "17.3gpp" },
        { bukva: "Р", sound: "18.3gpp" },
        { bukva: "М", sound: "19.3gpp" },
        { bukva: "Т", sound: "20.3gpp" },
        { bukva: "У", sound: "21.3gpp" },
        { bukva: "Ф", sound: "22.3gpp" },
        { bukva: "Х", sound: "23.3gpp" },
        { bukva: "Ц", sound: "24.3gpp" },
        { bukva: "Ч", sound: "25.3gpp" },
        { bukva: "Ш", sound: "26.3gpp" },
        { bukva: "Щ", sound: "27.3gpp" },
        { bukva: "Ъ", sound: "28.3gpp" },
        { bukva: "Ы", sound: "29.3gpp" },
        { bukva: "Ь", sound: "30.3gpp" },
        { bukva: "Э", sound: "31.3gpp" },
        { bukva: "Ю", sound: "32.3gpp" },
        { bukva: "Я", sound: "33.3gpp" },
      ],
    };
  },
  computed: {
    listRu: function() {
      return this.bukvyRu.split("");
    },
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
