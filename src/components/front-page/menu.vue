<template>
    <fragment>
        <SectionTitle title="Menu"/>
        <v-row >
            <v-col
                v-for="(item, i) in items" :key="i" :cols="item.tileSize === 1 ? 6 : 3"
                class="pa-2"
            >
                <v-card
                    :height="item.tileSize === 3 ? 0.5 * cardHeight : cardHeight"
                    :class="[item.backgroundColor, `${item.color === 'PRIMARY' ? 'brown' : 'white'}--text`]"
                    :style="{borderRadius: '10px', overflow: 'hidden'}"
                >
                    <v-card-title class="font-weight-black title text-uppercase card-title">{{item.name}}</v-card-title>
                    <v-row class="gradient" no-gutters> </v-row>
                    <v-row class="card-img" align="center" justify="center" no-gutters>
                        <v-img
                                :src="item.image"
                                contain
                                height="60%"
                                width="100%"
                        >
                        </v-img>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </fragment>
</template>

<script>
    import SectionTitle from "./section-title";
    export default {
        name: 'Menu',
        components: {SectionTitle},
        props: {
            items: Array
        },
        data: function() {
            return {
                cardHeight: 400,
                rounded: {

                }
            }
        }
    }
</script>

<style scoped>
    .card-title {
        position: absolute;
        z-index: 20;
        width: 100%;
    }
    .gradient {
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top left, rgba(0,0,0,.33), rgba(0,0,0,0));
    }
    .card-img {
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 100%;
    }
</style>