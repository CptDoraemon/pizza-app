<template>
    <div class="sub-panel-wrapper">
        <div class="width-wrapper">
            <FirstLevelSelector :items="firstLevelOptions" :activeItem="activeFirstLevelOption" @toggleActiveItem="toggleActiveFirstLevelOption"/>
        </div>
        <div class="width-wrapper" v-if="isSecondLevelOption">
            <SecondLevelSelector
                    :items="secondLevelOptions"
                    :activeItem="activeSecondLevelOption"
                    @toggleActiveItem="toggleActiveSecondLevelOption"
                    :key="activeFirstLevelOption"
            />
        </div>
        <div class="width-wrapper">
            <ThirdLevelSelector
                :items="getDataForThirdLevel()"
            />
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import FirstLevelSelector from "./first-level-selector";
    import SecondLevelSelector from "./second-level-selector";
    import ThirdLevelSelector from "./third-level-selector";
    export default {
        name: 'SubPanel',
        components: {ThirdLevelSelector, SecondLevelSelector, FirstLevelSelector},
        data() {
            return {
                activeFirstLevelOption: 0,
                activeSecondLevelOption: 0,
                isSecondLevelOption: false,
                secondLevelOptions: []
            }
        },
        computed: {
            ...mapGetters('pizzaTemplate', {
                templateData: "getSubPanelData"
            }),
            ...mapState({
                firstLevelOptions: state => state.pizzaTemplate.options,
            })
        },
        methods: {
            toggleActiveFirstLevelOption(value) {
                this.activeFirstLevelOption = value;
                this.activeSecondLevelOption = 0;
            },
            toggleActiveSecondLevelOption(value) {
                this.activeSecondLevelOption = value
            },
            setIsSecondLevelOption() {
                const firstLevelOptionKey = this.firstLevelOptions[this.activeFirstLevelOption];
                const firstLevelObj = this.templateData[firstLevelOptionKey];
                const secondLevelObj = firstLevelObj[Object.keys(firstLevelObj)[0]];
                const isSecondLevelOption = secondLevelObj.name === undefined;
                if (isSecondLevelOption) {
                    this.isSecondLevelOption = true;
                    this.secondLevelOptions = Object.keys(firstLevelObj)
                } else {
                    this.isSecondLevelOption = false;
                    this.secondLevelOptions = []
                }
            },
            getDataForThirdLevel() {
                return this.isSecondLevelOption ?
                    this.templateData[this.firstLevelOptions[this.activeFirstLevelOption]][this.secondLevelOptions[this.activeSecondLevelOption]] :
                    this.templateData[this.firstLevelOptions[this.activeFirstLevelOption]]
            }
        },
        watch: {
            activeFirstLevelOption() {
                this.setIsSecondLevelOption()
            }
        },
        mounted() {
            this.setIsSecondLevelOption()
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