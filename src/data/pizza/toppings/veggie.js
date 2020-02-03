import {
    options,
    defaultOption,
    defaultCount,
    basePrice,
    maxCount
} from './index'
const placeholderImage = '../images/veggie.png';

const veggie = [
    {
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
    {
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
    {
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
    {
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
    {
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
];

export default veggie