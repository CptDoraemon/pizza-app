<template>
    <div class="third-level-selector-wrapper">
        <div class="cards-wrapper">
            <OptionCard
                    v-for="(item, i) in items"
                    :key="i"
                    :item="item"
                    :path="path"
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
            items: Array,
            path: Array
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