<template>
  <v-container style="background: white">
      <h1>Musicals</h1>
    <ul v-for="acts in musicals" :key="acts.id">
        <li>Act {{acts.actName}}</li>
            <ul v-for="detail in musicals" :key="detail.id">
                <li>{{detail}}    |    aaa</li>
            </ul>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "Test",
  data: () => ({
    musicals: [
      {
        actName: 1,
        datails: [
          {
            scene: "Name1",
            songs: [
              {songName: "song1",
              character: "Character 1"
              }
            ]
          },
          {
            scene: "Name2",
            songs: [
              {songName: "song2",character: "Character 2"}
            ]
          },
          {
            scene: "Name3",
            songs: [
              {songName: "song3",character: "Character 3"}
            ]
          },
        ]
      }

    ]

  })
};
</script>

<style>
</style>