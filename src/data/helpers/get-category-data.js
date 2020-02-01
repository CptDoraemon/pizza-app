import meatFavorites from "../category/meat-favorites";
import veggieFavorites from "../category/veggie-favorite";

const CATEGORIES = {
    meatFavorites: 'meat-favorites',
    veggieFavorites: 'veggie-favorites',
    createYourOwn: 'create-your-own'
};

const TITLES = {
    meatFavorites: 'meat favorites',
    veggieFavorites: 'veggie favorites',
    createYourOwn: 'create your own'
};

function getCategoryData(link) {
    switch (link) {
        case CATEGORIES.meatFavorites:
            return {
                items: [...meatFavorites],
                title: TITLES.meatFavorites
            };
        case CATEGORIES.veggieFavorites:
            return {
                items: [...veggieFavorites],
                title: TITLES.veggieFavorites
            };
        case CATEGORIES.createYourOwn:
            return {
                items: null,
                title: null
            };
        default:
            return {
                items: null,
                title: null
            };
    }
}

export default getCategoryData