const options = {
    'on left side': 'on left side',
    'on whole': 'on whole',
    'on right side': 'on right side'
};
const defaultOption = options['on whole'];
const defaultCount = 0;
const placeholderImage = '../images/free-topping.png';

const freeToppings = {
    'chili peppers': {
        name: 'chili peppers',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
    },
    'ilaliano blend seasoning': {
        name: 'ilaliano blend seasoning',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
    },
    'olive oil': {
        name: 'olive oil',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 10,
        image: placeholderImage,
    },
    'sweet garlic and pepper seasoning': {
        name: 'sweet garlic and pepper seasoning',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
    },
    'tabasco sauce': {
        name: 'tabasco sauce',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
    }
};

export default freeToppings