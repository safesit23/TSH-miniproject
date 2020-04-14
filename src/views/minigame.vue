<template>
  <v-content>
    <v-container
      class="mt-5 justify-content-center"
      style="background: white; height: 700px"
    >
    <div>
        <h1>Musical Game</h1>
    </div>
    <div v-if="select===true">
        Choose:
        <v-btn small color="primary" @click="setType(0)">Set 1</v-btn>
        <v-btn small color="primary" @click="setType(1)">Set 2</v-btn>
    </div>
    <div v-else>
        Action:
        <v-btn small color="primary" @click="resetGame()">Reset</v-btn>
    </div>
    <div>
        Name: {{listOfMusical}}
    </div>
    </v-container>
  </v-content>
</template>

<script>
import Musical from "../data/musical.json"
export default {
 name: "MiniGame",
 data: () => ({
    musicals: Musical,
    select: true,
    listOfMusical: null
  }),
  methods: {
      setType(type) {
          console.log(type);
          this.listOfMusical = this.musicals[type].data
          this.select = false
      },
      resetGame(){
          this.select = true
          this.listOfMusical = null
      }
  },
  computed:{}
}
</script>

<style>
</style>