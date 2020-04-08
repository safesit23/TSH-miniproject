<template>
  <v-content>
    <v-container style="background: white; height: 700px">
      <v-row class="px-1">
        <v-col>
          <h1 class="text-center">{{musicalName}}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ul v-for="{actName,datails} in musicals" :key="actName">
            <li>{{actName}}</li>
            <ul v-for="{sceneId,scene,songs} in datails" :key="scene">
              <li>{{scene}}</li>
              <ul v-for="{id,songName,character} in songs" :key="id">
                <li>{{songName}}..................................................{{character}}</li>
              </ul>
            </ul>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import KingAndI from "../data/KingAndI.json"
export default {
  name: "Test",
  data: () => ({
    musicals: KingAndI,
    musicalName: "King and I"
  })
};
</script>

<style>
</style>