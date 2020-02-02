<template>
        <v-row class="fill-height" align="center" justify="center">
    <!-- Size Picker -->
            <v-col cols="12">
                <v-row no-gutters class="full-width">
                    <v-col cols="3" v-for="(obj, key) in sizeTemplate" :key="key">
                        <v-card class="caption font-weight-bold primary--text text-capitalize" flat style="border-radius: 0">
                            <v-row align="center" justify="center" no-gutters class="py-4">
                                <v-col cols="12">
                                    <v-row align="center" justify="center">
                                        <v-icon class="primary--text py-4" :style="{transform: `scale(${obj.multiplier})`}">local_pizza</v-icon>
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    <v-row align="center" justify="center">
                                        {{obj.name}}
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    <v-row align="center" justify="center">
                                        <div class="divider mt-1 mb-2 grey lighten-1"> </div>
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    <v-row align="center" justify="center">
                                        {{obj.slices}} slices
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
    <!-- Size Picker Ends-->
    <!-- Quantity and Price -->
            <v-col cols="12">
                <v-row class="font-weight-bold secondary--text display-1">
                    <v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-row align="center" justify="center" no-gutters>
                                    <v-col cols="4"><v-icon>add_circle_outline</v-icon></v-col>
                                    <v-col cols="4">{{ quantity }}</v-col>
                                    <v-col cols="4"><v-icon>remove_circle_outline</v-icon></v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-row align="center" justify="center">
                                    ${{ price.toFixed(2) }}
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-row>
                </v-row>
            </v-col>
    <!-- Quantity and Price Ends -->
    <!-- Add to Cart -->
            <v-col cols="12">
                <v-row align="center" justify="center">
                    <v-btn class="primary white--text font-weight-black title" depressed width="80%" height="50">Add TO CART</v-btn>
                </v-row>
            </v-col>
    <!-- Add to Cart Ends-->
    <!-- Calories -->
            <v-col cols="12">
                <v-row align="center" justify="center" class="font-weight-black title">
                    {{ calories }} CALS/SLICE
                </v-row>
            </v-col>
    <!-- Calories Ends-->
        </v-row>
</template>

<script>
    export default {
        name: 'SizeCountPanel',
        props: {
            sizeTemplate: Object,
            quantity: Number,
            price: Number,
            calories: Number
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .divider {
        width: 20%;
        height: 2px;
    }
</style>