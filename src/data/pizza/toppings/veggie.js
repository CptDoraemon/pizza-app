import {
    options,
    defaultOption,
    defaultCount,
    basePrice,
    maxCount
} from './index'
const placeholderImage = '../images/veggie.png';

const veggie = {
    'artichokes': {
        name: 'artichokes',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        maxCount: maxCount,
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
        maxCount: maxCount,
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
        maxCount: maxCount,
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
        maxCount: maxCount,
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
        maxCount: maxCount,
        calories: 0,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    }
};

export default veggie