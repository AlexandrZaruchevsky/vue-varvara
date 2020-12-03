<template>
  <v-container>
    <v-card>
      <v-card-title>
        Choice
      </v-card-title>
      <v-container class="d-flex flex-wrap align-center">
        <v-btn
          color="success ma-1"
          small
          fab
          v-for="(b, i) in alfavit"
          :key="i"
          @click="choice(b)"
        >
          <span class="text-h5">{{ b.bukva }}</span>
        </v-btn>
      </v-container>
      <v-card-actions>
        <v-btn color="light-blue" @click="play"
          ><span class="white--text">play</span></v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { Howl } from "howler";
import path from "path";

export default {
  name: "Choice",
  data() {
    return {
      track: null,
      flag: false,
    };
  },
  computed: {
    ...mapGetters({
      alfavit: "GET_ALFAVIT_RU",
    }),
  },
  methods: {
    choice: function(e) {
      if (this.flag) {
        if (e.sound == this.track) {
          const track = new Howl({
            src: [path.join(__dirname, "/audio/", "success.mp3")],
            html5: true,
          });
          track.play();
          console.log("ПРАВИЛЬНО");
        } else {
          const track = new Howl({
            src: [path.join(__dirname, "/audio/", "fail.mp3")],
            html5: true,
          });
          track.play();
          console.log("НЕПРАВИЛЬНО");
        }
        this.flag = false;
      }
    },
    play: function() {
      if(this.flag) return
      const rnd = Math.floor(Math.random() * Math.floor(33));
      this.track = this.alfavit[rnd].sound;
      this.flag = true;
      const track = new Howl({
        src: [path.join(__dirname, "/audio/alfavitRu/", this.track)],
        html5: true,
      });
      track.play();
      console.log(`random: ${this.track}`, this.flag);
    },
  },
};
</script>

<style lang="scss" scoped>
.qwe {
  height: 20px;
  width: 30px;
}
</style>
