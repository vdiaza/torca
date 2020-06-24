// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueLazyLoad from 'vue-lazyload'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import VueEasyLightbox from 'vue-easy-lightbox'

export default function (Vue, { router, head, isClient, isServer }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueLazyLoad)
  if(isClient){
    AOS.init({
      offset: 300,
      duration: 600,
      once: true,
    })
    Vue.component('vue-easy-lightbox', () => import('vue-easy-lightbox'))
    Vue.component('VueSlickCarousel', () => import('vue-slick-carousel'))
  }
}
