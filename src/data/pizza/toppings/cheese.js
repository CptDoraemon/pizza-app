import {
    options,
    defaultOption,
    defaultCount,
    basePrice,
    maxCount
} from './index'
const placeholderImage = '../images/cheese.png';

const cheese = [
    {
        name: 'blue cheese',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        maxCount: maxCount,
        calories: 10,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'extra cheese',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        maxCount: maxCount,
        calories: 10,
        image: placeholderImage,
        price: 3,
        isPremium: true
    },
    {
        name: 'extra dairy-free cheese',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        maxCount: maxCount,
        calories: 15,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'feta cheese',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        maxCount: maxCount,
        calories: 15,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'four cheese blend topping',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        maxCount: maxCount,
        calories: 120,
        image: placeholderImage,
        price: 4,
        isPremium: true
    }
];

export default cheese