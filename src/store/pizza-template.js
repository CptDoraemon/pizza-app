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
            console.log(state);
            const keysArray = state.options;
            const data = {};
            keysArray.forEach(key => {
                Object.assign(data, {[key]: state[key]})
            });
            console.log(data);
            return data
        }
    }
};

export default pizzaTemplateState