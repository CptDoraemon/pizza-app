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
            const dough = state["dough-sauce-cheese"].dough.name;
            const sauce = getDescriptionWithOption(state["dough-sauce-cheese"].sauce);
            const baseCheese = getDescriptionWithOption(state["dough-sauce-cheese"].cheese);
            const veggie = getDescriptionWithOptionAndCount(state.toppings.veggie);
            const meat = getDescriptionWithOptionAndCount(state.toppings.meat);
            const cheese = getDescriptionWithOptionAndCount(state.toppings.cheese);
            const freeToppings = getDescriptionWithOptionAndCount(state["free toppings"]);
            const specialInstructions = state["special instructions"].name === 'regular' ? '' : state["special instructions"].name;
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