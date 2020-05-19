// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faGithub, faTwitter, faFacebook, faInstagram, faBars);

import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    // href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600',
    href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700',
  }),
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);
}
