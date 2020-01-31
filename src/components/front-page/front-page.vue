<template>
    <v-row align="start" justify="center">
        <v-col cols="12" md="8">
            <FeaturedSpecials :items="featuredSpecials"/>
        </v-col>
        <v-col cols="12" md="8">
            <Menu :items="menuItems"/>
        </v-col>
    </v-row>
</template>

<script>
    import FeaturedSpecials from "./featured-specials";
    import featuredSpecials from "../../data/front-page/featured-specials";
    import menuItems from "../../data/front-page/menu";
    import Menu from "./menu";
    export default {
        name: 'FrontPage',
        components: {Menu, FeaturedSpecials},
        data: function() {
            return {
                featuredSpecials,
                menuItems
            }
        }
    }
</script>

<style scoped>
</style>