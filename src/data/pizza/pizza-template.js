import sizes from "./sizes";
import dough from "./dough-sauce-cheese/dough";
import sauce from "./dough-sauce-cheese/sauce";
import baseCheese from "./dough-sauce-cheese/cheese";
import veggie from "./toppings/veggie";
import meat from "./toppings/meat";
import toppingCheese from "./toppings/cheese";
import freeToppings from "./free-toppings";
import specialInstructions from "./special-instructions";

const pizzaTemplate = {
    'size': {
        ...sizes
    },
    'dough-sauce-cheese': {
        'dough': {
            ...dough
        },
        'sauce': {
            ...sauce
        },
        'cheese': {
            ...baseCheese
        }
    },
    'toppings': {
        'veggie': {
            ...veggie
        },
        'meat': {
            ...meat
        },
        'cheese': {
            ...toppingCheese
        }
    },
    'free toppings': {
        ...freeToppings
    },
    'special instructions': {
        ...specialInstructions
    },
    options: [
        'dough-sauce-cheese', 'toppings', 'free toppings', 'special instructions'
    ]
};

export default pizzaTemplate