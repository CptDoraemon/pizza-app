import pizzaConfigurations from "../pizza-configurations";

const buildYourOwn = {
    name: 'build your own',
    size: pizzaConfigurations.size[2],
    dough: pizzaConfigurations['dough'][0],
    sauce: pizzaConfigurations['sauce'][0],
    baseCheese: pizzaConfigurations['baseCheese'][1],
    veggie: [Object.assign({}, pizzaConfigurations.veggie[1], {count: 1})],
    meat: [Object.assign({}, pizzaConfigurations.meat[1], {count: 1})],
    toppingCheese: [Object.assign({}, pizzaConfigurations.toppingCheese[0], {count: 1})],
    'freeToppings': [],
    'specialInstructions': {},
    count: 1
};

export default buildYourOwn