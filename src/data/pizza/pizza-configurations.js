import sizes from "./sizes";
import dough from "./dough-sauce-cheese/dough";
import sauce from "./dough-sauce-cheese/sauce";
import baseCheese from "./dough-sauce-cheese/cheese";
import veggie from "./toppings/veggie";
import meat from "./toppings/meat";
import toppingCheese from "./toppings/cheese";
import freeToppings from "./free-toppings";
import specialInstructions from "./special-instructions";

const pizzaConfigurations = {
    'size': [
        ...sizes
    ],
    'dough': [
        ...dough
    ],
    'sauce': [
        ...sauce
    ],
    'baseCheese': [
        ...baseCheese
    ],
    'veggie': [
        ...veggie
    ],
    'meat': [
        ...meat
    ],
    'toppingCheese': [
        ...toppingCheese
    ],
    'freeToppings': [
        ...freeToppings
    ],
    'specialInstructions': [
        ...specialInstructions
    ],
};

export default pizzaConfigurations