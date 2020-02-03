<template>
    <div class="third-level-selector-wrapper">
        <div class="cards-wrapper">
            <OptionCard
                    v-for="(item, i) in itemsArray"
                    :key="i"
                    :item="item"
            />
        </div>
    </div>
</template>

<script>
    import OptionCard from "./option-card";
    export default {
        name: 'ThirdLevelSelector',
        components: {OptionCard},
        props: {
            items: Object
        },
        computed: {
            options() {
                return Object.keys(this.items)
            },
            itemsArray() {
                return Object.values(this.items)
            }
        },
    }
</script>

<style scoped>
    .third-level-selector-wrapper {
        width: 100%;
    }
    .cards-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
    }
</style>