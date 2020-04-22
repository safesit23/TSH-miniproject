<template>
  <v-app id="app" style="background-color: #8b181b;">
    <router-view />
    <v-footer class="font-weight-medium mt-2" style="background-color: #8b181b;">
      <v-col class="text-center" cols="12">
        <p style="color: white">&copy; 2020 The Showhopper</p>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Kanit:wght@300&display=swap");
#app {
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  background-color: #8b181b;
  color: white;
}
</style>