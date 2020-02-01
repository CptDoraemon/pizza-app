<template>
    <v-card elevation="0" :style="{borderRadius: '15px', overflow: 'hidden'}" height="250">
        <v-row class="fill-height">
            <v-col cols="4" class="grey lighten-2 fill-height">
                <v-img :src="image" height="100%" width="100%" contain> </v-img>
            </v-col>
            <v-col cols="8" class="grey lighten-3 secondary--text">
                <v-row no-gutters justify="center" align="center" class="fill-height pa-4">
                    <v-col cols="12" class="title font-weight-black">{{name}}</v-col>
                    <v-col cols="12">{{description}}</v-col>
                    <v-row no-gutters justify="center" align="center">
                        <v-col cols="5">
                            <v-row no-gutters class="body-1 font-weight-bold">
                                <v-col cols="12">
                                    Starting from ${{price}}
                                </v-col>
                                <v-col cols="12">
                                    {{calories[0]}} To {{calories[1]}} Cals/Slice
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="7">
                            <v-row no-gutters class="text-uppercase">
                                <v-col cols="6">
                                    <router-link :to="`/pizza-customizer/${encodeURIComponent(name)}`">
                                        <v-btn class="white primary--text font-weight-black" depressed>Customize</v-btn>
                                    </router-link>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn class="primary white--text font-weight-black" depressed>quick add</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: 'CategoryListItemCard',
        props: {
            image: String,
            name: String,
            description: String,
            price: Number,
            calories: Array
        }
    }
</script>

<style scoped>

</style>