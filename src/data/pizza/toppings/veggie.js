const options = [
    'on left side',
    'on whole',
    'on right side'
];
const defaultOption = 'on whole';
const defaultCount = 1;
const placeholderImage = '../images/veggie.png';
const basePrice = 2;

const veggie = [
    {
        name: 'artichokes',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'broccoli',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 5,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'bruschetta',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 5,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'caramelized onions',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 5,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'cilantro',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    }
];

export default veggie