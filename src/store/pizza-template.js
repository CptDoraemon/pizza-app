import pizzaConfigurations from "../data/pizza/pizza-configurations";

const firstCategory = ['dough / sauce / cheese', 'toppings', 'free toppings', 'special instructions'];
const secondCategory = [
    ['dough', 'sauce', 'base cheese'],
    ['veggie', 'meat', 'cheese'],
    [],
    []
];
const mappedKeyInPizzaConfigurations = [
    ['dough', 'sauce', 'baseCheese'],
    ['veggie', 'meat', 'toppingCheese'],
    ['freeToppings'],
    ['specialInstructions']
];

const pizzaTemplateState ={
    namespaced: true,
    state: {
        ...pizzaConfigurations
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        getFirstCategory: () => () => firstCategory,
        getSecondCategory: () => (firstCategoryIndex) => secondCategory[firstCategoryIndex],
        getConfigurableItems: state => (firstCategoryIndex, secondCategoryIndex) => {
            const key = mappedKeyInPizzaConfigurations[firstCategoryIndex][secondCategoryIndex];
            return [
                ...state[key]
            ]
        }
    }
};

export default pizzaTemplateState