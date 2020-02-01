const Color = {
    PRIMARY: 'PRIMARY',
    INVERTED: 'INVERTED'
};

const BackgroundColor = {
    white: 'grey lighten-4',
    grey: 'grey darken-3',
    brown: 'brown lighten-1',
    green: 'green darken-4',
    teal: 'teal',
    black: 'grey darken-4'
};

const placeholderImage = "./pizza-1.png";

const menuItems = [
    {
        name: "create your own",
        tileSize: 1,
        backgroundColor: BackgroundColor.white,
        color: Color.PRIMARY,
        image: placeholderImage,
        link: "create-your-own"
    },
    {
        name: "meat favorites",
        tileSize: 2,
        backgroundColor: BackgroundColor.grey,
        color: Color.INVERTED,
        image: placeholderImage,
        link: "meat-favorites"
    },
    {
        name: "veggie favorites",
        tileSize: 2,
        backgroundColor: BackgroundColor.brown,
        color: Color.INVERTED,
        image: placeholderImage,
        link: "veggie-favorites"
    },
    // {
    //     name: "gourmet thins",
    //     tileSize: 2,
    //     backgroundColor: BackgroundColor.white,
    //     color: Color.PRIMARY,
    //     image: placeholderImage
    // },
    // {
    //     name: "alternative crusts",
    //     tileSize: 2,
    //     backgroundColor: BackgroundColor.grey,
    //     color: Color.INVERTED,
    //     image: placeholderImage
    // },
    // {
    //     name: "pick up specials",
    //     tileSize: 2,
    //     backgroundColor: BackgroundColor.brown,
    //     color: Color.INVERTED,
    //     image: placeholderImage
    // },
    // {
    //     name: "wings and things",
    //     tileSize: 2,
    //     backgroundColor: BackgroundColor.green,
    //     color: Color.INVERTED,
    //     image: placeholderImage
    // },
    // {
    //     name: "salad",
    //     tileSize: 2,
    //     backgroundColor: BackgroundColor.white,
    //     color: Color.PRIMARY,
    //     image: placeholderImage
    // },
    // {
    //     name: "panzos & quesadillas",
    //     tileSize: 2,
    //     backgroundColor: BackgroundColor.teal,
    //     color: Color.INVERTED,
    //     image: placeholderImage
    // },
    // {
    //     name: "the bread basket",
    //     tileSize: 2,
    //     backgroundColor: BackgroundColor.black,
    //     color: Color.INVERTED,
    //     image: placeholderImage
    // },
    // {
    //     name: "drinks",
    //     tileSize: 3,
    //     backgroundColor: BackgroundColor.white,
    //     color: Color.PRIMARY,
    //     image: placeholderImage
    // },
    // {
    //     name: "dip it",
    //     tileSize: 3,
    //     backgroundColor: BackgroundColor.green,
    //     color: Color.INVERTED,
    //     image: placeholderImage
    // },
    // {
    //     name: "sweet treats",
    //     tileSize: 3,
    //     backgroundColor: BackgroundColor.teal,
    //     color: Color.INVERTED,
    //     image: placeholderImage
    // },
    // {
    //     name: "apps & sides",
    //     tileSize: 3,
    //     backgroundColor: BackgroundColor.white,
    //     color: Color.PRIMARY,
    //     image: placeholderImage
    // }
];

export default menuItems