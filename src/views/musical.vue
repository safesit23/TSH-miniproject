<template>
  <v-content>
    <v-container style="background: white; height: 2000px">
      <v-row class="px-1">
        <v-col>
          <h1 class="text-center">{{musicalName}}</h1>
          <a href="https://genius.com/Pasek-and-paul-hey-good-lookin-annotated">เพลง</a>
        </v-col>
      </v-row>
      <!-- <v-row>
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
      </v-row>-->
      <v-row>
        <v-col>
          <ul v-for="{actName,datails} in musicals" :key="actName">
            <li>{{actName}}</li>
            <ul v-for="{id,scene,subscenes} in datails" :key="id">
              <li>Scene{{scene}}: </li>
              <v-for v-for="{name,songs} in subscenes" :key="name">
               <span>{{name}}</span>
                <ul>
                  <v-for v-for="{id, songName, character} in songs" :key="id">
                    <li>{{songName}}..................................................{{character}}</li>
                  </v-for>
                </ul>
              </v-for>
            </ul>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-12">
          <p v-html="venue"></p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-12">
        <div v-html="exampleTable"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import KingAndI from "../data/KingAndI.json"
import DreamBox from "../data/DreamBox.json"
export default {
  name: "Test",
  data: () => ({
};
</script>

<style>
</style>