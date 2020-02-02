<template>
    <div class="sub-panel-wrapper">
        <div class="width-wrapper">
            <FirstLevelSelector :items="firstLevelOptions" :activeItem="activeFirstLevelOption" @toggleActiveItem="toggleActiveFirstLevelOption"/>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import FirstLevelSelector from "./first-level-selector";
    export default {
        name: 'SubPanel',
        components: {FirstLevelSelector},
        data() {
            return {
                activeFirstLevelOption: 0
            }
        },
        computed: {
            ...mapGetters('pizzaTemplate', {
                templateData: "getSubPanelData"
            }),
            ...mapState({
                firstLevelOptions: state => state.pizzaTemplate.options,
            }),
        },
        methods: {
            toggleActiveFirstLevelOption(value) {
                this.activeFirstLevelOption = value
            }
        }
    }
</script>

<style scoped>
    .sub-panel-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .width-wrapper {
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
</style>