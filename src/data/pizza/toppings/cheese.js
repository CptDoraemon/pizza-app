const options = {
    'on left side': 'on left side',
    'on whole': 'on whole',
    'on right side': 'on right side'
};
const defaultOption = options['on whole'];
const defaultCount = 0;
const placeholderImage = '../images/cheese.png';
const basePrice = 2;

const cheese = {
    'blue cheese': {
        name: 'blue cheese',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 10,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    'extra cheese': {
        name: 'extra cheese',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 10,
        image: placeholderImage,
        price: 3,
        isPremium: true
    },
    'extra dairy-free cheese': {
        name: 'extra dairy-free cheese',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 15,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    'feta cheese': {
        name: 'feta cheese',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 15,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    'four cheese blend topping': {
        name: 'four cheese blend topping',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 120,
        image: placeholderImage,
        price: 4,
        isPremium: true
    }
};

export default cheese