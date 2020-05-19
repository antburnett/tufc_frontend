<template>
  <div>
    <navbar-component></navbar-component>

    <!-- <banner-component></banner-component> -->
    <!-- <main class="mt-8 flex-1"> -->

    <main>
      <slot />
    </main>

    <footer-component></footer-component>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavbarComponent from '../components/Navbar.vue';
// import BannerComponent from '../components/Banner.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  metaInfo: {
    // title: 'Hello, world!',
  },
  components: {
    NavbarComponent,
    // BannerComponent,
    FooterComponent,
  },
};
</script>

<style>
/* * {
  border: 1px dotted cyan;
} */
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

/* menu CSS custom */
/* @media (max-width: 576px) {
  .content {
    padding-top: 51px;
  }
}

@media (min-width: 577px) {
  .pt-scroll {
    padding-top: 51px;
  }

  .nav-sticky {
    position: fixed !important;
    min-width: 100%;
    top: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.25s ease-in;
    z-index: 1;
  }
} */
</style>
