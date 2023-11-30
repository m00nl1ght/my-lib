import * as components from './components';
import Vue, { PluginFunction } from 'vue';

const DSLibrary: { install: Exclude<PluginFunction<never>, undefined> } = {
    install: function (vue: typeof Vue) {
        for (const componentKey in components) {
            vue.use(( components as any)[componentKey])
        }
    },
};

export default DSLibrary;

export * from './components';