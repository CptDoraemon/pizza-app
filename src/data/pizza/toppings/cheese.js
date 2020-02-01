const options = [
    'on left side',
    'on whole',
    'on right side'
];
const defaultOption = 'on whole';
const defaultCount = 1;
const placeholderImage = '../images/cheese.png';
const basePrice = 2;

const cheese = [
    {
        name: 'blue cheese',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 10,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'extra cheese',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 10,
        image: placeholderImage,
        price: 3,
        isPremium: true
    },
    {
        name: 'extra dairy-free cheese',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 15,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'feta cheese',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 15,
        image: placeholderImage,
        price: basePrice,
        isPremium: false
    },
    {
        name: 'four cheese blend topping',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 120,
        image: placeholderImage,
        price: 4,
        isPremium: true
    }
];

export default cheese