import {
    options,
    defaultOption,
    defaultCount,
    basePrice,
    maxCount
} from './index'
const placeholderImage = '../images/meat.png';


const meat = [
    {
        name: 'anchovies',
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
        name: 'bacon crumble',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        maxCount: maxCount,
        calories: 20,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'bacon strips',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        maxCount: maxCount,
        calories: 20,
        image: placeholderImage,
        price: 3,
        isPremium: true
    },
    {
        name: 'buffalo chicken',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        maxCount: maxCount,
        calories: 20,
        image: placeholderImage,
        price: 3,
        isPremium: true
    },
    {
        name: 'new york style pepperoni',
        options: {...options},
        option: defaultOption,
        count: defaultCount,
        maxCount: maxCount,
        calories: 30,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    }
];

export default meat