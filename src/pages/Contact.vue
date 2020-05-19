<template>
  <Layout>
    <!-- hero-component -->

    <!-- Features -->
    <!-- <Features></Features> -->

    <main>
      <div class="relative pt-16 pb-4 flex content-center items-center justify-center ">
        <div class="absolute top-0 w-full h-full bg-center bg-cover  " style='background-image: url("/images/social-media.jpg");'>
          <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="p-4 lg:pr-12">
                <h1 class="text-white font-semibold text-2xl lg:text-5xl">
                  Contact Turramurra United Football Club.
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Want to know more? Got a question or comment? We can be contacted by email, Facebook or Instagram.
                </p>
                <ul class="flex flex-row mb-4 justify-center ">
                  <li class="px-10">
                    <a
                      class="lg:text-white lg:hover:text-tufc_yellow text-tufc_red  py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-3xl"
                      href="https://facebook.com/turramurraunited/"
                    >
                      <font-awesome :icon="['fab', 'facebook']" />
                      <i class="text-tufc_red fab fa-facebook text-lg leading-lg"></i>
                    </a>
                  </li>
                  <li class="px-10">
                    <a
                      class="lg:text-white lg:hover:text-tufc_yellow text-tufc_red py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-3xl"
                      href="https://instagram.com/turramurraunited/"
                    >
                      <font-awesome :icon="['fab', 'instagram']" />
                      <i class="text-tufc_red fab fa-instagram text-lg leading-lg "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <contact-component></contact-component>
  </Layout>
</template>

<script>
// import Features from '../components/Features.vue';
// import HeroComponent from '../components/Hero.vue';
import ContactComponent from '../components/ContactComponent.vue';

import axios from 'axios';

export default {
  components: {
    // Features,
    // HeroComponent,
    ContactComponent,
  },
  metaInfo: {
    title: 'Contact Us',
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
