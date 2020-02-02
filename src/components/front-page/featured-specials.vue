<template>
    <fragment>
        <SectionTitle title="Featured specials"/>
        <v-carousel
                height="400"
        >
            <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
            >
                <v-row class="full-size" no-gutters>
                    <v-col
                            cols="6"
                            class="full-size"
                    >
                        <v-img
                                :alt="item.name"
                                :src="item.image"
                                class="full-size"
                        />
                    </v-col>
                    <v-col cols="6" class="full-size">
                        <v-row  class="full-size pa-md-8 grey lighten-5" no-gutters>
                            <v-col cols="12" class="font-weight-black display-1 text-uppercase">
                                <span
                                    v-for="(word, i) in styleTitle(item.name)"
                                    :key="i"
                                    :class="i === 0 ? 'primary--text' : 'secondary--text'"
                                > {{word}} </span>
                            </v-col>
                            <v-col cols="12" class="font-weight-bold secondary--text">{{item.description}}</v-col>
                            <v-col cols="12" class="body-2 secondary--text">{{item.note}}</v-col>
                            <v-col cols="12" class="font-weight-black primary--text display-1">${{item.price}}</v-col>
                            <v-col cols="12"><v-btn depressed class="orange white--text font-weight-black">Order Now</v-btn></v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
    </fragment>
</template>

<script>
    import SectionTitle from "./section-title";
    export default {
        name: 'FeaturedSpecials',
        components: {SectionTitle},
        props: {
            items: Array
        },
        methods: {
            styleTitle: function(string) {
                let words = string.split(' ');
                if (!words.length) return [words[0], ''];

                const firstWord = words[0];
                words.shift();
                const restWords = words.join(' ');
                return [firstWord, restWords]
            }
        }
    }
</script>

<style scoped>
    .full-size {
        width: 100%;
        height: 100%;
    }
</style>
