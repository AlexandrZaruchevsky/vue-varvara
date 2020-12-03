<template>
  <v-container>
    <v-card>
      <v-card-title primary-title class="teal lighten-2">
        <span class="white--text">Audio</span>
      </v-card-title>
      <v-container>
        <v-btn color="success" fab @click.prevent="play" text>Play</v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { Howl } from "howler";
import path from "path";

export default {
  name: "Audio",
  data() {
    return {
      track: new Howl({
        src: [path.join(__dirname, "/audio/01.3gpp")],
        html5: true,
      }),
    };
  },
  methods: {
    play: function() {
      this.track.play();
    },
  },
};
</script>

<style></style>
