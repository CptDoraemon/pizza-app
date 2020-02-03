<template>
    <div
            :class="isActive ? `${cardWrapperClass} option-card-wrapper-active` : `${cardWrapperClass} secondary--text option-card-wrapper-inactive`"
            >
        <div v-if="isActive" class="card-selected">
            <v-icon class="card-selected-text">done</v-icon>
        </div>
        <div :class="isActive ? 'card-content-active' : 'card-content-inactive'">
            {{ item.name }}
        </div>
        <div :class="isActive ? 'card-image-active' : 'card-image-inactive'">
            <img :src="item.image" :alt="item.name" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OptionCard',
        data() {
            return {
                cardWrapperClass: 'option-card-wrapper font-weight-bold text-capitalize',
                isActive: false
            }
        },
        props: {
            item: Object,
            path: Array
        }
    }
</script>

<style scoped>
    .option-card-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        transition: width 0.3s;
        height: 150px;
        border-radius: 15px;
        margin: 10px;
        padding: 0 10px;
        position: relative;
    }
    .option-card-wrapper-active {
        flex-direction: row-reverse;
        width: calc(37% - 20px);
        border: solid 3px var(--theme-green);
        color: var(--theme-green);
    }
    .option-card-wrapper-inactive {
        flex-direction: row;
        width: calc(21% - 20px);
        border: solid 3px rgba(0,0,0,0.1);
    }
    .card-selected {
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .card-selected-text {
        color: var(--theme-green);
    }
    .card-content-active{
        width: 50%;
        height: 100%;
        line-height: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .card-content-inactive{
        width: 100%;
        height: 50%;
        line-height: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .card-image-active {
        width: 50%;
        height: 100%;
        overflow: hidden;
    }
    .card-image-inactive {
        width: 100%;
        height: 50%;
        overflow: hidden;
    }
    .card-image-inactive img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: translateY(40%);
        transition: transform 0.3s 0.3s;
    }
    .card-image-active img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: translateY(0);
        transition: transform 0.3s 0.3s;
    }
</style>