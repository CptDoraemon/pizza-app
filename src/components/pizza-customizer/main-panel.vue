<template>
    <v-container fluid class="container grey lighten-2">
        <v-row align="center" justify="center" class="fill-height pa-8">
            <v-col cols="1" align-self="start" class="fill-height">
                <router-link to="/">
                    <div class="back-button font-weight-black">
                        <span v-html="`<`" class="primary--text"> </span>
                        <span class="secondary--text"> Back</span>
                    </div>
                </router-link>
            </v-col>
            <v-col cols="7" class="fill-height">
                <div class="mid-col-wrapper">
                    <div class="mid-col-title text-center font-weight-black display-1 secondary--text text-uppercase">
                        {{ size }}
                    </div>

                    <v-img :src="'../images/pizza-1.png'" class="mid-col-image" contain/>

                    <div class="mid-col-description text-center">
                        {{ descriptions }}
                    </div>
                </div>
            </v-col>
            <v-col cols="3" class="fill-height">
                <SizeCountPanel :size-template="sizeTemplate" :quantity="quantity" :price="price" :calories="calories"/>
            </v-col>
            <v-col cols="1" class="fill-height">
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import SizeCountPanel from "./size-count-panel";
    export default {
        name: 'MainPanel',
        components: {SizeCountPanel},
        props: {
            size: String,
            descriptions: String,
            sizeTemplate: Object,
            quantity: Number,
            price: Number,
            calories: Number
        }
    }
</script>

<style scoped>
    .container {
        height: 600px;
    }
    .mid-col-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    .mid-col-title {
        width: 100%;
    }
    .mid-col-image{
        width: 100%;
        max-height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .mid-col-description {
        width: 100%;
    }
</style>