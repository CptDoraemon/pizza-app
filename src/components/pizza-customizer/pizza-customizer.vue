<template>
    <div v-if="isLoaded" class="pizza-customizer-wrapper">
        <MainPanel />
        <SubPanel />
    </div>
</template>

<script>
    import MainPanel from "./main-panel";
    import SubPanel from "./sub-panel";

    export default {
        name: 'PizzaCustomizer',
        components: {SubPanel, MainPanel},
        data: function() {
            return {
                isLoaded: false
            }
        },
        mounted: function() {
            this.isLoaded = true;
        },
        computed: {

        },
        methods: {

        }
    }
</script>

<style scoped>
    .pizza-customizer-wrapper {
        position: relative;
    }
</style>