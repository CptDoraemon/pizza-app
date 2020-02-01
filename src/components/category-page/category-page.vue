<template>
    <fragment v-if="isDataLoaded">
        <div class="container-wrapper grey darken-2 white--text font-weight-black title">
            <ShadeGradient :zIndex="10"/>
            <div class="size-wrapper background-wrapper py-8 display-1 text-uppercase font-weight-black">
                <div>{{title}}</div>
                <v-img :src="'../images/pizza-1.png'" class="py-8" alt="title" contain> </v-img>
            </div>
            <div class="size-wrapper back-to-menu-wrapper py-8">
                <router-link :to="{name: 'home'}" class="white--text"><span class="primary--text" v-html="'<'"> </span> Back to menu</router-link>
            </div>
        </div>

        <div class="py-8"> </div>

        <v-row v-for="(item, i) in items" :key="i" align="center" justify="center">
            <v-col cols="12" lg="8" xl="6">
                <CategoryListItemCard
                    :image="item.image"
                    :name="item.name"
                    :description="item.description"
                    :price="item.price"
                    :calories="item.calories"
                />
            </v-col>
        </v-row>
    </fragment>
</template>

<script>
    import ShadeGradient from "../common/shade-gradient";
    import getCategoryData from "../../data/helpers/get-category-data";
    import CategoryListItemCard from "./category-list-item-card";
    import {routeNames, routeParams} from "../../router";

    export default {
        name: 'CategoryPage',
        components: {CategoryListItemCard, ShadeGradient},
        data: function() {
            return {
                items: null,
                isDataLoaded: false,
                title: null
            }
        },
        mounted: function() {
            this.fetchData(this.$route.params.categoryName);
            this.isDataLoaded = true;
        },
        methods: {
            fetchData: function(categoryName) {
                const data = getCategoryData(categoryName);
                if (!data.title) {
                    const routeName = routeNames.pizzaCustomizer;
                    this.$router.push({name: routeName, params: {[routeParams[routeName].pizza]: 'customize'}})
                } else {
                    this.items = data.items;
                    this.title = data.title;
                    this.isDataLoaded = true
                }
            }
        }
    }
</script>

<style scoped>
    .container-wrapper {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }
    .size-wrapper {
        position: absolute;
        width: 100%;
        max-width: 1000px;
    }
    .back-to-menu-wrapper {
        height: 100%;
        z-index: 30;
    }
    .background-wrapper {
        height: 200%;
        z-index: 20;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
</style>
