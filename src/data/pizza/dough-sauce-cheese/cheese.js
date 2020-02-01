const cheeseOptions = [
    'cheese on bottom',
    'cheese on the top',
    'easy on the cheese',
    'regular'
];

const defaultCheeseOption = 'regular';
const placeholderImage = '../images/cheese.png';

const cheese = [
    {
        name: 'no cheese',
        calories: 0,
        options: null,
        option: null,
        image: placeholderImage
    },
    {
        name: 'dairy-free cheese',
        calories: 60,
        options: [...cheeseOptions],
        option: defaultCheeseOption,
        image: placeholderImage
    },
    {
        name: 'four cheese base',
        calories: 70,
        options: [...cheeseOptions],
        option: defaultCheeseOption,
        image: placeholderImage
    },
    {
        name: 'mozzarella cheese',
        calories: 70,
        options: [...cheeseOptions],
        option: defaultCheeseOption,
        image: placeholderImage
    }
];

export default cheese;