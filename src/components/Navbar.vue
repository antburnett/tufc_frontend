<template>
  <div class="flag tufc_gradient">
    <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg sticky ">
      <div class=" w-full px-4 mx-auto flex flex-wrap items-center justify-between ">
        <div class="relative flex justify-between w-full lg:w-auto">
          <a class="text-sm font-bold leading-relaxed py-2 whitespace-no-wrap uppercase text-white w-1/3 lg:w-auto" href="/">
            <g-image src="../assets/images/tufc_logo.png" class="w-12 h-12 lg:w-32 lg:h-32" alt="Turramurra United Football Club logo" fit="fill"></g-image>
          </a>
          <a class=" w-1/3 lg:w-auto" href="/">
            <div class="text-md font-bold leading-relaxed py-2  uppercase text-white text-center lg:hidden">turramurra united fc</div>
          </a>

          <button
            class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none w-1/3 text-right"
            type="button"
            v-on:click="toggleNavbar()"
          >
            <font-awesome class="text-white" :icon="['fas', 'bars']" />
            <i class="text-white fas fa-bars"></i>
          </button>
        </div>
        <div class="lg:flex  items-center bg-white lg:bg-transparent lg:shadow-none lg:w-auto w-full" v-bind:class="{ hidden: !showMenu, block: showMenu }">
          <ul class="flex flex-col flex-grow lg:flex-row list-none mr-auto  mr-auto bg-tufc_yellow lg:bg-transparent">
            <!-- <li class="flex items-center">
              <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center lg:text-md uppercase font-bold" href="/news"
                ><i class="lg:text-gray-300 text-gray-500 text-2xl lg:text-3xl leading-lg mr-2"></i> News</a
              >
            </li> -->
            <li class="flex items-center">
              <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center lg:text-md uppercase font-bold" href="/play/"
                ><i class="lg:text-gray-300 text-gray-500 text-2xl leading-lg mr-2"></i> Play</a
              >
            </li>
            <li class="flex items-center">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center lg:text-md uppercase font-bold"
                href="/coaches-managers/"
                ><i class="lg:text-gray-300 text-gray-500 text-2xl leading-lg mr-2"></i> Coaches & Managers</a
              >
            </li>
            <li class="flex items-center">
              <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center lg:text-md uppercase font-bold" href="/sponsors"
                ><i class="lg:text-gray-300 text-gray-500 text-2xl leading-lg mr-2"></i> Sponsors</a
              >
            </li>
            <li class="flex items-center">
              <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center lg:text-md uppercase font-bold" href="/about/"
                ><i class="lg:text-gray-300 text-gray-500 text-2xl leading-lg mr-2"></i> About</a
              >
            </li>
            <li class="flex items-center pr-20">
              <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center lg:text-md uppercase font-bold" href="/contact/"
                ><i class="lg:text-gray-300 text-gray-500 text-2xl leading-lg mr-2"></i> Contact</a
              >
            </li>
          </ul>
          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li class="flex flex-col items-center justify-center">
              <div class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-1 lg:py-2 flex items-center lg:text-l text-sm italic">
                Proudly supported by
              </div>
              <g-link
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center lg:text-md font-bold text-3xl"
                to="/chadwick-real-estate/"
              >
                <!-- <g-image src="../assets/images/sponsors/chadwick-real-estate-c-white.png" alt="Chadwick Real Estate" width="40"></g-image> -->
                <g-image
                  src="../assets/images/sponsors/chadwick-real-estate-white.png"
                  alt="Proudly supported by Chadwick Real Estate"
                  width="150"
                  class="hidden lg:block"
                ></g-image>
                <g-image
                  src="../assets/images/sponsors/chadwick-real-estate-logo.png"
                  alt="Proudly supported by Chadwick Real Estate"
                  width="150"
                  class="sm:block lg:hidden"
                ></g-image>
              </g-link>
              <!-- <div class="inline-block ml-2 lg:text-md text-gray-300">Chadwick Real Estate</div> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
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

<style>
.tufc_gradient-5 {
  background: linear-gradient(130deg, #398235 30%, #ffd900 40%, #ffd900 48%, #213166 50%, #213166 58%, #aa4243 60%, #aa4243 68%, #ffffff 75%, #ffffff 100%);
}
.tufc_gradient {
  background: linear-gradient(160deg, #ffd900 0%, #ffd900 20%, #213166 25%, #213166 75%, #aa4243 80%, #aa4243 100%);
  overflow: hidden;
  position: relative;
}

.tufc_gradient::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(255, 255, 255, 0.25) 15%,
    rgba(0, 0, 0, 0.25) 30%,
    rgba(255, 255, 255, 0.25) 45%,
    rgba(0, 0, 0, 0.25) 60%,
    rgba(255, 255, 255, 0.25) 80%,
    rgba(0, 0, 0, 0.25) 90%
  );
}
</style>
