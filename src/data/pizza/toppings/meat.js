const options = [
    'on left side',
    'on whole',
    'on right side'
];
const defaultOption = 'on whole';
const defaultCount = 1;
const placeholderImage = '../images/meat.png';
const basePrice = 2;

const meat = [
    {
        name: 'anchovies',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 5,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'bacon crumble',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 20,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'bacon strips',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 20,
        image: placeholderImage,
        price: 3,
        isPremium: true
    },
    {
        name: 'buffalo chicken',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 20,
        image: placeholderImage,
        price: 3,
        isPremium: true
    },
    {
        name: 'new york style pepperoni',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 30,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    }
];

export default meat