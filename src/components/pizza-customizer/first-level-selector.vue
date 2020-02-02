<template>
    <div class="first-level-selector-wrapper">
        <div class="selector" ref="selector" :style="{left: `${selectorWidth * activeItem}px`, width: `${selectorWidth}px`}">

        </div>
        <div v-for="(item, i) in items" :key="i" :style="{width: `${100 / items.length}%`}" class="font-weight-black text-capitalize items-wrapper">
            <div
                    @click="$emit('toggleActiveItem', i)"
                    :class="i === activeItem ? 'item-active' : 'item-inactive'"
                    :ref="`item-${i}`"
            >
                {{ item.replace(/-/g, ' / ') }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FirstLevelSelector',
        props: {
            items: Array,
            activeItem: Number
        },
        data: function() {
            return {
                selectorWidth: 0
            }
        },
        mounted() {
            this.selectorWidth = this.$refs['item-0'][0].getBoundingClientRect().width;
        }
    }
</script>

<style scoped>
    .first-level-selector-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
        top: -50px;
        border-radius: 60px;
        border: solid 4px white;
        z-index: 10;
        background-color: rgb(230, 230, 230);
        overflow: hidden;
    }
    .selector {
        height: 100px;
        background-color: var(--theme-green);
        border-radius: 60px;
        border: solid 4px var(--theme-green-lighten);
        position: absolute;
        top: 0;
        z-index: 10;
        transition: left 0.3s;
    }
    .items-wrapper {
        z-index: 20;
    }
    .item-active {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
        /*background-color: var(--v-primary-base);*/
        color: white;
        border-radius: 60px;
        border: solid 4px rgba(0,0,0,0);
        transition: color 0.3s;
        padding: 0 20px;
        text-align: center;
    }
    .item-inactive {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
        cursor: pointer;
        border-radius: 60px;
        border: solid 4px rgba(0, 0, 0, 0);
        transition: color 0.3s;
        padding: 0 20px;
        text-align: center;
    }
</style>