const options = {
    'on left side': 'on left side',
    'on whole': 'on whole',
    'on right side': 'on right side'
};
const defaultOption = options['on whole'];
const defaultCount = 0;
const placeholderImage = '../images/veggie.png';
const basePrice = 2;

const veggie = {
    'artichokes': {
        name: 'artichokes',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    'broccoli': {
        name: 'broccoli',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 5,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    'bruschetta': {
        name: 'bruschetta',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 5,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    'caramelized onions': {
        name: 'caramelized onions',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 5,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    'cilantro': {
        name: 'cilantro',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    }
};

export default veggie