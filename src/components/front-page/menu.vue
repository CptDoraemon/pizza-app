<template>
    <fragment>
        <SectionTitle title="Menu"/>
        <v-row >
            <v-col
                v-for="(item, i) in items" :key="i" :cols="item.tileSize === 1 ? 6 : 3"
                class="pa-2"
            >
                <router-link :to="`/category/${item.link}`">
                    <v-card
                        :height="item.tileSize === 3 ? 0.5 * cardHeight : cardHeight"
                        :class="[item.backgroundColor, `${item.color === 'PRIMARY' ? 'secondary' : 'white'}--text`]"
                        :style="{borderRadius: '10px', overflow: 'hidden'}"
                    >
                        <v-card-title class="font-weight-black title text-uppercase card-title">{{item.name}}</v-card-title>
                        <ShadeGradient :zIndex="10" />
                        <v-row class="card-img" align="center" justify="center" no-gutters>
                            <v-img
                                    :src="item.image"
                                    contain
                                    height="60%"
                                    width="100%"
                            >
                            </v-img>
                        </v-row>
                        <v-btn class="button" color="orange" fab depressed><v-icon color="white">local_pizza</v-icon></v-btn>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
    </fragment>
</template>

<script>
    import SectionTitle from "./section-title";
    import ShadeGradient from "../common/shade-gradient";
    export default {
        name: 'Menu',
        components: {ShadeGradient, SectionTitle},
        props: {
            items: Array
        },
        data: function() {
            return {
                cardHeight: 400,
            }
        }
    }
</script>

<style scoped>
    .card-title {
        position: absolute;
        z-index: 30;
        width: 100%;
    }
    .card-img {
        position: absolute;
        z-index: 20;
        width: 100%;
        height: 100%;
    }
    .button {
        position: absolute;
        z-index: 30;
        right: 10px;
        bottom: 10px;
        border-radius: 50%;
    }
</style>