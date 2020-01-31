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
                    :style="{borderRadius: '10px'}"
                >
                    <v-img
                        :src="item.image"
                        contain
                        height="60%"
                    >
                        <v-card-title class="font-weight-black title text-uppercase">{{item.name}}</v-card-title>
                    </v-img>
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
</style>