<template>
  <v-container class="about pb-12" >
    <v-row class="justify-center pt-6">
      <img src="../../public/img/logoTSH_white.png" height="100px" />
    </v-row>
    <v-row class="justify-center pt-5">
      <h2 class="font-weight-medium" style="color:white">Hop on with Us !</h2>
    </v-row>
    <v-row>
      <v-col col="3" class="justify-center d-flex">
        <v-btn text icon outlined color="white">
          <a href="facebook.link" target="_blank">
            <v-icon>fab fa-facebook</v-icon>
          </a>
        </v-btn>
        <v-btn text icon outlined color="gray">
          <v-icon>fab fa-instagram</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    facebook: {
      link: "https://www.facebook.com",
      icon: ""
    },
    instagram: {}
  })
};
</script>
