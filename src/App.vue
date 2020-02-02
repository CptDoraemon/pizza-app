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
    :root {
        --theme-green: rgb(86, 111, 49);
        --theme-green-lighten: rgb(167, 204, 112)
    }
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