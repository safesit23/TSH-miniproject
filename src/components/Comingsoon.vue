<template>
  <v-container class="about pb-12">
    <v-row class="justify-center pt-6">
      <img src="../../public/img/logoTSH_white.png" height="100px" />
    </v-row>
    <v-row class="justify-center pt-5">
      <h4 class="font-weight-medium" style="color:white">Hop on with Us !</h4>
    </v-row>
    <v-row>
      <v-col col="3" class="justify-center d-flex">
        <v-btn color="white" fab small depressed class="mx-3" :href="facebook.link">
          <v-icon>{{facebook.icon}}</v-icon>
        </v-btn>

        <v-btn color="white" fab small depressed class="mx-3" :href="instagram.link">
          <v-icon>{{instagram.icon}}</v-icon>
        </v-btn>

        <v-btn color="white" fab small depressed class="mx-3" :href="youtube.link">
          <v-icon>{{youtube.icon}}</v-icon>
        </v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.v-application .pt-5{
  padding-top: 40px !important
}
.theme--light.v-btn {
  color: rgba(138, 25, 27);
}
a {
  text-decoration: none;
}
</style>
<script>
export default {
  name: "Home",
  data: () => ({
    facebook: {
      link: "https://www.facebook.com/theshowhopper.th",
      icon: "fab fa-facebook"
    },
    instagram: {
      link: "https://www.instagram.com/the.showhopper",
      icon: "fab fa-instagram"
    },
    youtube: {
      link: "https://www.youtube.com/channel/UCZwwytRtU9dOh7BtWSTL4Gw",
      icon: "fab fa-youtube"
    }
  })
};
</script>
