import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';

import './tailwind.postcss';

export default {
  extends: DefaultTheme,
  Layout,
};
