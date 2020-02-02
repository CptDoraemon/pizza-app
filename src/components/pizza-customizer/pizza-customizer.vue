<template>
    <div v-if="isLoaded">
        <MainPanel />
    </div>
</template>

<script>
    import MainPanel from "./main-panel";

    export default {
        name: 'PizzaCustomizer',
        components: {MainPanel},
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