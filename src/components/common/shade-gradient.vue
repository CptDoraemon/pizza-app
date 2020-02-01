<template>
    <div class="wrapper" :style="{zIndex: zIndex === undefined ? 'auto' : zIndex}">

    </div>
</template>

<script>
    export default {
        name: 'ShadeGradient',
        props: {
            zIndex: Number
        }
    }
</script>

<style scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top left, rgba(0,0,0,.5), rgba(0,0,0,0));
        position: absolute;
        top: 0;
        left: 0;
    }
</style>