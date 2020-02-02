const sauceOptions = {
    'extra sauce on the bottom': 'extra sauce on the bottom',
    'extra sauce on the top': 'extra sauce on the top',
    'easy on the sauce': 'easy on the sauce',
    'regular': 'regular'
};

const defaultSauceOption = sauceOptions['regular'];
const placeholderImage = '../images/sauce.png';

const sauce = {
    'no sauce': {
        name: 'no sauce',
        options: null,
        calories: 0,
        option: null,
        image: placeholderImage
    },
    'buffalo blue cheese sauce': {
        name: 'buffalo blue cheese sauce',
        calories: 30,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    'creamy garlic sauce': {
        name: 'creamy garlic sauce',
        calories: 60,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    'chipotle sauce': {
        name: 'chipotle sauce',
        calories: 15,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    'creamy truffle': {
        name: 'creamy truffle',
        calories: 55,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    'home style italian tomato sauce': {
        name: 'home style italian tomato sauce',
        calories: 10,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    'hot sauce': {
        name: 'hot sauce',
        calories: 10,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    'pesto sauce': {
        name: 'pesto sauce',
        calories: 35,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    'sweet chili thai sauce': {
        name: 'sweet chili thai sauce',
        calories: 15,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    'tandoori sauce': {
        name: 'tandoori sauce',
        calories: 0,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    'texas bbq': {
        name: 'texas bbq',
        calories: 15,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
};

export default sauce