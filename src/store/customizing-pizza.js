import buildYourOwn from "../data/pizza/base-pizzas/build-your-own";

const customizingPizzaState = {
    namespaced: true,
    state: {
        ...buildYourOwn
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        getPizzaDescription: state => {
            const dough = state.dough.name;
            const sauce = getDescriptionWithOption(state.sauce);
            const baseCheese = getDescriptionWithOption(state.baseCheese);
            const veggie = getDescriptionWithOptionAndCount(state.veggie);
            const meat = getDescriptionWithOptionAndCount(state.meat);
            const cheese = getDescriptionWithOptionAndCount(state.toppingCheese);
            const freeToppings = getDescriptionWithOptionAndCount(state.freeToppings);
            const specialInstructions = state.specialInstructions.name === 'regular' ? '' : state.specialInstructions.name;
            const description = [dough, sauce, baseCheese, veggie, meat, cheese, freeToppings, specialInstructions].filter(i => i && i.length);
            return description.join(', ');
        },
        getTotalPrice: function() {
            return 123
        },
        getTotalCalories: function() {
            return 9999
        }
    }
};

function getDescriptionWithOption(input) {
    return input.option === 'regular' ? input.name : `${input.name} (${input.option})`
}

function getDescriptionWithOptionAndCount(array) {
    const defaultOptions = 'on whole';
    const descArray = array.map((obj) => {
        const option = obj.option === defaultOptions ? '' : ` (${obj.option})`;
        const count = obj.count === 1 ? '' : ` (${obj.count})`;
        return [obj.name, option, count].join('')
    });
    return descArray.join('');
}

export default customizingPizzaState