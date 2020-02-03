const sauceOptions = [
    'extra sauce on the bottom',
    'extra sauce on the top',
    'easy on the sauce',
    'regular'
];

const defaultSauceOption = 'regular';
const placeholderImage = '../images/sauce.png';

const sauce = [
    {
        name: 'no sauce',
        options: null,
        calories: 0,
        option: null,
        image: placeholderImage
    },
    {
        name: 'buffalo blue cheese sauce',
        calories: 30,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    {
        name: 'creamy garlic sauce',
        calories: 60,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    {
        name: 'chipotle sauce',
        calories: 15,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    {
        name: 'creamy truffle',
        calories: 55,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    {
        name: 'home style italian tomato sauce',
        calories: 10,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    {
        name: 'hot sauce',
        calories: 10,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    {
        name: 'pesto sauce',
        calories: 35,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    {
        name: 'sweet chili thai sauce',
        calories: 15,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    {
        name: 'tandoori sauce',
        calories: 0,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    },
    {
        name: 'texas bbq',
        calories: 15,
        options: {...sauceOptions},
        option: defaultSauceOption,
        image: placeholderImage
    }
];

export default sauce