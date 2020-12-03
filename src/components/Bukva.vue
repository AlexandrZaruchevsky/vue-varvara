<template>
  <div class="alfavit">
    <div class="mx-auto">
      <span>{{ buk.bukva }}</span>
    </div>
    <v-btn text @click="play()">play</v-btn>
  </div>
</template>

<script>
import { Howl } from "howler";
import path from "path";
export default {
  name: "Bukva",
  props: {
    buk: Object,
  },
  methods: {
    play: function() {
      const track = new Howl({
        src: [path.join(__dirname, "/audio/", this.buk.sound)],
        html5: true,
      });
      track.play();
    },
  },
};
</script>

<style lang="scss" scoped>
.alfavit {
  text-align: center;
  font-size: 13rem;
  color: white;
  background-color: rgba(0, 0, 224, 0.747);
  width: 200px;
  height: 260px;
  border-radius: 5px;
}

.alfavit > div {
  text-align: center;
}

.alfavit > div > span {
  position: relative;
  top: 120px;
}

button {
  top: 190px;
}
</style>
