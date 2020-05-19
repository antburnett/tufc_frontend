<template>
  <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >Tailwind Starter Kit</a
        ><button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" v-bind:class="{ hidden: !showMenu, block: showMenu }">
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/profile"
              ><i class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i> Docs</a
            >
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#pablo"
              ><i class="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "></i><span class="lg:hidden inline-block ml-2">Share</span></a
            >
          </li>
          <li class="flex items-center">
            <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#pablo"
              ><i class="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "></i><span class="lg:hidden inline-block ml-2">Tweet</span></a
            >
          </li>
          <li class="flex items-center">
            <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#pablo"
              ><i class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "></i><span class="lg:hidden inline-block ml-2">Star</span></a
            >
          </li>
          <li class="flex items-center">
            <button
              class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style="transition: all 0.15s ease 0s;"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Download
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<!-- <section id="top" class="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
  <nav
    id="site-menu"
    class="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-red-900"
  >
    <div class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
      <a href="#" class="no-underline py-1">
        <h1 class="font-bold text-lg tracking-widest">TUFC</h1>
      </a>
      <button id="menuBtn" class="hamburger block sm:hidden focus:outline-none" type="button" onclick="navToggle();">
        <span class="hamburger__top-bun"></span>
        <span class="hamburger__bottom-bun"></span>
      </button>
    </div>
    <div id="menu" class="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
      <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="#">2020 Trials</a>
      <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#">Players</a>
      <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#">Coaches & Managers</a>
      <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#">Sponsors</a>
      <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#">Info</a>
      <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#">Weather</a>
      <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#">Calendar</a>
    </div>
  </nav>
</section> -->

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
