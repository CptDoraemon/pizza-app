<template>
    <v-app>
      <FrontPage/>
    </v-app>
</template>

<script>


import FrontPage from "./components/front-page/front-page";
export default {
  name: 'App',

  components: {
      FrontPage,
  },

  data: () => ({
    //
  }),
};
</script>
