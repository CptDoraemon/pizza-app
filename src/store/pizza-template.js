import pizzaTemplate from "../data/pizza/pizza-template";

const pizzaTemplateState ={
    namespaced: true,
    state: {
        ...pizzaTemplate
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        getSubPanelData: state => {
            const keysArray = state.options;
            const data = {};
            keysArray.forEach(key => {
                Object.assign(data, {[key]: state[key]})
            });
            return data
        }
    }
};

export default pizzaTemplateState