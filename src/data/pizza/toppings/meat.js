const options = {
    'on left side': 'on left side',
    'on whole': 'on whole',
    'on right side': 'on right side'
};
const defaultOption = options['on whole'];
const defaultCount = 0;
const placeholderImage = '../images/meat.png';
const basePrice = 2;

const meat = {
    'anchovies': {
        name: 'anchovies',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 5,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    'bacon crumble': {
        name: 'bacon crumble',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 20,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    'bacon strips': {
        name: 'bacon strips',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 20,
        image: placeholderImage,
        price: 3,
        isPremium: true
    },
    'buffalo chicken': {
        name: 'buffalo chicken',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 20,
        image: placeholderImage,
        price: 3,
        isPremium: true
    },
    'new york style pepperoni': {
        name: 'new york style pepperoni',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 30,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    }
};

export default meat