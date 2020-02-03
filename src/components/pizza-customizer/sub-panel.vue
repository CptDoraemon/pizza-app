<template>
    <div class="sub-panel-wrapper">
        <div class="width-wrapper">
            <FirstLevelSelector :items="getFirstCategory()" :activeItem="firstCategory" @toggleActiveItem="toggleFirstCategory"/>
        </div>
        <div class="width-wrapper" v-if="getSecondCategory(firstCategory).length > 1">
            <SecondLevelSelector
                    :items="getSecondCategory(firstCategory)"
                    :activeItem="secondCategory"
                    @toggleActiveItem="toggleSecondCategory"
                    :key="firstCategory"
            />
        </div>
        <div class="width-wrapper">
            <ThirdLevelSelector
                :items="getConfigurableItems(firstCategory, secondCategory)"
            />
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import FirstLevelSelector from "./first-level-selector";
    import SecondLevelSelector from "./second-level-selector";
    import ThirdLevelSelector from "./third-level-selector";
    export default {
        name: 'SubPanel',
        components: {ThirdLevelSelector, SecondLevelSelector, FirstLevelSelector},
        data() {
            return {
                firstCategory: 0,
                secondCategory: 0
            }
        },
        computed: {
            ...mapGetters('pizzaTemplate', ["getFirstCategory", "getSecondCategory", "getConfigurableItems"])
        },
        methods: {
            toggleFirstCategory(value) {
                this.firstCategory = value;
                this.secondCategory = 0
            },
            toggleSecondCategory(value) {
                this.secondCategory = value
            }
        }
    }
</script>

<style scoped>
    .sub-panel-wrapper {
        width: 100%;
        min-height: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .width-wrapper {
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
</style>