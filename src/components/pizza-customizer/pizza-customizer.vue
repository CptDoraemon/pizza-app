<template>
    <div v-if="isLoaded">
        <MainPanel :size="pizza.size.name" :descriptions="getPizzaDescription" :size-template="{...pizzaTemplate.size}" :quantity="pizza.count" :price="totalPrice" :calories="totalCalories"/>
    </div>
</template>

<script>
    import pizzaTemplate from "../../data/pizza/pizza-template";
    import buildYourOwn from "../../data/pizza/base-pizzas/build-your-own";
    import MainPanel from "./main-panel";

    export default {
        name: 'PizzaCustomizer',
        components: {MainPanel},
        data: function() {
            return {
                pizzaTemplate: {
                    ...pizzaTemplate
                },
                pizza: {
                    ...buildYourOwn
                },
                isLoaded: false
            }
        },
        mounted: function() {
            this.isLoaded = true;
        },
        computed: {
            getPizzaDescription: function() {
                const dough = this.pizza["dough-sauce-cheese"].dough.name;
                const sauce = this.getDescriptionWithOption(this.pizza["dough-sauce-cheese"].sauce);
                const baseCheese = this.getDescriptionWithOption(this.pizza["dough-sauce-cheese"].cheese);
                const veggie = this.getDescriptionWithOptionAndCount(this.pizza.toppings.veggie);
                const meat = this.getDescriptionWithOptionAndCount(this.pizza.toppings.meat);
                const cheese = this.getDescriptionWithOptionAndCount(this.pizza.toppings.cheese);
                const freeToppings = this.getDescriptionWithOptionAndCount(this.pizza["free toppings"]);
                const specialInstructions = this.pizza["special instructions"].name === 'regular' ? '' : this.pizza["special instructions"].name;
                const description = [dough, sauce, baseCheese, veggie, meat, cheese, freeToppings, specialInstructions].filter(i => i && i.length);
                return description.join(', ');
            },
            totalPrice: function() {
                return 123
            },
            totalCalories: function() {
                return 9999
            }

        },
        methods: {
            getDescriptionWithOption: function(input) {
                return input.option === 'regular' ? input.name : `${input.name} (${input.option})`
            },
            getDescriptionWithOptionAndCount: function(array) {
                const defaultOptions = 'on whole';
                const descArray = array.map((obj) => {
                    const option = obj.option === defaultOptions ? '' : ` (${obj.option})`;
                    const count = obj.count === 1 ? '' : ` (${obj.count})`;
                    return [obj.name, option, count].join('')
                });
                return descArray.join('');
            }
        }
    }
</script>