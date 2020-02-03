<template>
    <div class="third-level-selector-wrapper">
        <div class="cards-wrapper">
            <OptionCard
                    v-for="(item, i) in itemsArray"
                    :key="i"
                    :item="item"
                    :isActive="activeCard === i"
                    :index="i"
                    @toggleActiveCard="setActiveCard"
            />
        </div>
    </div>
</template>

<script>
    import OptionCard from "./option-card";
    export default {
        name: 'ThirdLevelSelector',
        components: {OptionCard},
        data() {
            return {
                activeCard: 0
            }
        },
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
        methods: {
            setActiveCard(value) {
                if (this.activeCard === value) return;
                this.activeCard = value
            }
        }
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