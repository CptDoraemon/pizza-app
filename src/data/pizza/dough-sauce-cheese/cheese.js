const cheeseOptions = {
    'cheese on bottom': 'cheese on bottom',
    'cheese on the top': 'cheese on the top',
    'easy on the cheese': 'easy on the cheese',
    'regular': 'regular'
};

const defaultCheeseOption = cheeseOptions['regular'];
const placeholderImage = '../images/cheese.png';

const cheese = {
    'no cheese': {
        name: 'no cheese',
        calories: 0,
        options: null,
        option: null,
        image: placeholderImage
    },
    'dairy-free cheese': {
        name: 'dairy-free cheese',
        calories: 60,
        options: [...cheeseOptions],
        option: defaultCheeseOption,
        image: placeholderImage
    },
    'four cheese base': {
        name: 'four cheese base',
        calories: 70,
        options: [...cheeseOptions],
        option: defaultCheeseOption,
        image: placeholderImage
    },
    'mozzarella cheese': {
        name: 'mozzarella cheese',
        calories: 70,
        options: [...cheeseOptions],
        option: defaultCheeseOption,
        image: placeholderImage
    }
};

export default cheese;