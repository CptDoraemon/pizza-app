<template>
  <v-app>
<!--    <FrontPage/>-->
    <router-view/>
  </v-app>
</template>

<script>
  // import FrontPage from "./components/front-page/front-page";
  export default {
    name: 'App',
    components: {

    },
    data: () => ({
      //
    }),
  };
</script>

<style>
    a:link {
        text-decoration: inherit;
        color: inherit;
        cursor: auto;
    }

    a:visited {
        text-decoration: inherit;
        color: inherit;
        cursor: auto;
    }
</style>