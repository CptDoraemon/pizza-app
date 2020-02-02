import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: colors.orange,
                secondary: colors.brown,
            },
        },
    },
});
