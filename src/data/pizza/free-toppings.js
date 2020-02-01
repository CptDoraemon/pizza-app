const options = [
    'on left side',
    'on whole',
    'on right side'
];
const defaultOption = 'on whole';
const defaultCount = 1;
const placeholderImage = '../images/free-topping.png';

const freeToppings = [
    {
        name: 'chili peppers',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
    },
    {
        name: 'ilaliano blend seasoning',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
    },
    {
        name: 'olive oil',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 10,
        image: placeholderImage,
    },
    {
        name: 'sweet garlic and pepper seasoning',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
    },
    {
        name: 'tabasco sauce',
        options: [...options],
        option: defaultOption,
        count: defaultCount,
        calories: 0,
        image: placeholderImage,
    }
];

export default freeToppings