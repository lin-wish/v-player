<template>
<v-layout row>
    <v-flex xs12 sm6 lg4 offset-lg4 offset-sm3>
      <v-card v-if="allPlayList[currentIndex]">
         <v-card-media
          class="white--text"
          height="300px"
          :src="allPlayList[currentIndex].avatar"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline avatar-text">{{allPlayList[currentIndex].subtitle}}</span>
                <br/>
                <span class="avatar-text">{{allPlayList[currentIndex].title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-list two-line subheader>
          <v-list-tile avatar v-for="(item, index) in allPlayList" :key="item.title" @click="playSound(index)">
            <v-list-tile-avatar>
              <v-icon v-show="currentIndex == index && isPlay" class="green lighten-1 white--text">pause</v-icon>
              <v-icon v-show="currentIndex == index && !isPlay" class="green lighten-1 white--text">play_arrow</v-icon>
              <v-icon v-show="currentIndex != index" class="grey lighten-1 white--text">play_arrow</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-show="currentIndex !== index || !isPlay"> {{ item.title }}</v-list-tile-title>
              <v-list-tile-title v-show="currentIndex == index && isPlay" class="text--lighten-1 green--text">{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              {{ item.time }}
            </v-list-tile-action>
          </v-list-tile>

        </v-list>
        <app-player></app-player>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Player from "./Player";

export default {
  name: "Todo",
  components: {
    "app-player": Player
  },
  mounted() {
    this.getAllPlayList();
  },
  computed: {
    ...mapGetters(["allPlayList", "currentIndex", "isPlay"])
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    ...mapActions(["getAllPlayList", "playSound"])
  }
};
</script>
<style>
.avatar-text{
  text-shadow: 1px 1px 2px black;
}
</style>
