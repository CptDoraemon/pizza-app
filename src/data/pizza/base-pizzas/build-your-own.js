import pizzaTemplate from "../pizza-template";

const buildYourOwn = {
    name: 'build your own',
    size: pizzaTemplate.size.large,
    'dough-sauce-cheese': {
        dough: pizzaTemplate["dough-sauce-cheese"].dough["regular dough"],
        sauce: pizzaTemplate["dough-sauce-cheese"].sauce["buffalo blue cheese sauce"],
        cheese: pizzaTemplate["dough-sauce-cheese"].cheese["dairy-free cheese"]
    },
    toppings: {
        veggie: [Object.assign({}, pizzaTemplate.toppings.veggie.broccoli, {count: 1})],
        meat: [Object.assign({}, pizzaTemplate.toppings.meat["bacon crumble"], {count: 1})],
        cheese: [Object.assign({}, pizzaTemplate.toppings.cheese["blue cheese"], {count: 1})]
    },
    'free toppings': [],
    'special instructions': {},
    count: 1
};

export default buildYourOwn