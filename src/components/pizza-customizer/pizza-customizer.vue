<template>
    <div v-if="isLoaded">
        <MainPanel :size="pizza.size.name" :descriptions="getPizzaDescription"/>
    </div>
</template>

<script>
    // import baseCheese from '../../data/pizza/dough-sauce-cheese/cheese';
    // import dough from "../../data/pizza/dough-sauce-cheese/dough";
    // import sauce from "../../data/pizza/dough-sauce-cheese/sauce";
    // import cheese from '../../data/pizza/toppings/cheese';
    // import meat from "../../data/pizza/toppings/meat";
    // import veggie from "../../data/pizza/toppings/veggie";
    // import freeToppings from "../../data/pizza/free-toppings";
    // import sizes from "../../data/pizza/sizes";
    // import specialInstructions from "../../data/pizza/special-instructions";
    import getCustomizePizza from "../../data/pizza/helpers/get-customize-pizza";
    import MainPanel from "./main-panel";

    export default {
        name: 'PizzaCustomizer',
        components: {MainPanel},
        data: function() {
            return {
                pizza: {
                    size: '',
                    dough: '',
                    sauce: [],
                    baseCheese: [],
                    veggie: [],
                    meat: [],
                    cheese: [],
                    freeToppings: [],
                    specialInstructions: ''
                },
                isLoaded: false
            }
        },
        mounted: function() {
            this.pizza = {...getCustomizePizza()};
            this.isLoaded = true
        },
        computed: {
            getPizzaDescription: function() {
                const dough = this.pizza.dough.name;
                const sauce = this.getDescriptionWithOption(this.pizza.sauce);
                const baseCheese = this.getDescriptionWithOption(this.pizza.baseCheese);
                const veggie = this.getDescriptionWithOptionAndCount(this.pizza.veggie);
                const meat = this.getDescriptionWithOptionAndCount(this.pizza.meat);
                const cheese = this.getDescriptionWithOptionAndCount(this.pizza.cheese);
                const freeToppings = this.getDescriptionWithOptionAndCount(this.pizza.freeToppings);
                const specialInstructions = this.pizza.specialInstructions.name === 'regular' ? '' : this.pizza.specialInstructions.name;
                const description = [dough, sauce, baseCheese, veggie, meat, cheese, freeToppings, specialInstructions].filter(i => i.length);
                return description.join(', ');
            },
        },
        methods: {
            getDescriptionWithOption: function(array) {
                const descArray = array.map((obj) => {
                    return obj.option === 'regular' ? obj.name : `${obj.name} (${obj.option})`
                });
                return descArray.join('')
            },
            getDescriptionWithOptionAndCount: function(array) {
                const descArray = array.map((obj) => {
                    const option = obj.option === 'regular' ? '' : ` (${obj.option})`;
                    const count = obj.count === 1 ? '' : ` (${obj.count})`;
                    return [obj.name, option, count].join('')
                });
                return descArray.join('');
            }
        }
    }
</script>