<template>
  <v-app style="background-color: #8b181b;">
    <router-view />
    <v-footer class="font-weight-medium mt-2" style="background-color: #8b181b;">
      <v-col class="text-center" cols="12">
        <p>&copy; 2020 The Showhopper</p>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
<style>
p {
  color: white;
}
a {
  text-decoration: none;
}
</style>