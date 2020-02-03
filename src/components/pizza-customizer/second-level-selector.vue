<template>
    <div class="second-level-selector font-weight-bold text-capitalize">
        <div class="items-wrapper-outer">
            <div class="items-wrapper" ref="items-wrapper">
                <div
                        v-for="(item, i) in items" :key="i"
                        :class="activeItem === i ? `item-active` : `item-inactive`"
                        @click="$emit('toggleActiveItem', i)"
                        :ref="`item-${i}`"
                >
                    {{item}}
                </div>
            </div>
        </div>
        <div class="selector" :style="{width: `${itemsWrapperWidth}px`}">
            <div class="selector-line">
            </div>
            <div class="selector-pointer" :style="{left: `${selectorPointerLeft}px`}">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SecondLevelSelector',
        data() {
            return {
                itemsWrapperWidth: 0,
                selectorPointerLeft: 0
            }
        },
        props: {
            items: Array,
            activeItem: Number
        },
        methods: {
            setSelectorPointerLeft() {
                const activeItemEl = this.$refs[`item-${this.activeItem}`][0];
                this.selectorPointerLeft = activeItemEl.offsetLeft + activeItemEl.getBoundingClientRect().width * 0.5 - 10
            }
        },
        watch: {
            activeItem() {
                this.setSelectorPointerLeft();
            },
            items() {
                this.itemsWrapperWidth = this.$refs['items-wrapper'].getBoundingClientRect().width;
                this.setSelectorPointerLeft();
            }
        },
        mounted() {
            this.itemsWrapperWidth = this.$refs['items-wrapper'].getBoundingClientRect().width;
            this.setSelectorPointerLeft();
        }
    }
</script>

<style scoped>
    .second-level-selector {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .items-wrapper-outer {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .items-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .selector {
        height: 50px;
        position: relative;
        overflow: hidden;
    }
    .selector-line {
        width: 100%;
        height: 100%;
        border-top: solid 2px var(--theme-green);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .selector-pointer {
        width: 20px;
        height: 20px;
        border: 2px solid var(--theme-green);
        background-color: white;
        transform: rotate(45deg);
        position: absolute;
        top: -10px;
        transition: left 0.3s;
        z-index: 20;
    }
    .item-active {
        color: var(--theme-green);
        padding: 10px 50px;
    }
    .item-inactive {
        color: rgba(0,0,0,0.3);
        padding: 10px 50px;
        cursor: pointer;
    }
</style>