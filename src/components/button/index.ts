import Vue, { PluginFunction } from 'vue';
import Button from './button.vue'

const VueButtonPlugin: { install: Exclude<PluginFunction<never>, undefined> } = {
    install: function (vue: typeof Vue) {
        vue.component(Button.name, Button);
    },
};

export default VueButtonPlugin;

export {
    Button as DSButton
}