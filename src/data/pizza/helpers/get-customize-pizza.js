import baseCheese from '../dough-sauce-cheese/cheese';
import dough from "../dough-sauce-cheese/dough";
import sauce from "../dough-sauce-cheese/sauce";
// import cheese from '../toppings/cheese';
// import meat from "../toppings/meat";
// import veggie from "../toppings/veggie";
// import freeToppings from "../free-toppings";
import sizes from "../sizes";
import specialInstructions from "../special-instructions";

function getCustomizePizza() {
    return {
        size: sizes[2],
        dough: dough[0],
        sauce: [sauce[1]],
        baseCheese: [baseCheese[1]],
        veggie: [],
        meat: [],
        cheese: [],
        freeToppings: [],
        specialInstructions: specialInstructions[0]
    }
}

export default getCustomizePizza