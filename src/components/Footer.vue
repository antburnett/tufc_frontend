<template>
  <!-- Footer -->
  <footer class="bg-gray-900">
    <div class="container mx-auto px-6 pt-10 pb-6 text-white">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5>
            <g-link to="/news/" class="text-tufc_yellow font-bold uppercase tracking-wider hover:text-tufc_red">Latest News</g-link>
          </h5>
          <ul v-for="edge in $static.articles.edges" :key="edge.node.id" class="mb-4">
            <li class="mt-2 ">
              <g-link :to="edge.node.path" class="hover:underline text-gray-300 hover:text-tufc_yellow">
                <span v-if="edge.node.sticky">** </span>
                {{ edge.node.title }}</g-link
              >
            </li>
          </ul>
        </div>

        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5>
            <g-link to="/sponsors/" class="text-tufc_yellow font-bold uppercase tracking-wider hover:text-tufc_red">Sponsors</g-link>
          </h5>
          <footer-sponsors-component></footer-sponsors-component>
        </div>

        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5>
            <g-link to="/contact/" class="text-tufc_yellow font-bold uppercase tracking-wider hover:text-tufc_red">Contact Us</g-link>
          </h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="/contact/" class="hover:underline text-gray-300 hover:text-tufc_yellow">Contact</a>
            </li>
            <li class="mt-2">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800  py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-3xl"
                href="https://facebook.com/turramurraunited/"
              >
                <font-awesome :icon="['fab', 'facebook']" />
                <i class="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "></i>
                <!-- <span class="lg:hidden inline-block ml-2">Facebook</span> -->
              </a>
              <!-- <a href="https://facebook.com/turramurraunited/" class="hover:underline text-gray-300 hover:text-tufc_yellow">Facebook</a> -->
            </li>
            <li class="mt-2">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 py-4 lg:py-2 flex items-center text-xs uppercase font-bold text-3xl"
                href="https://instagram.com/turramurraunited/"
              >
                <font-awesome :icon="['fab', 'instagram']" />
                <i class="lg:text-gray-300 text-gray-500 fab fa-instagram text-lg leading-lg "></i>
                <!-- <span class="lg:hidden inline-block ml-2">Instagram</span> -->
              </a>
              <!-- <a href="https://instagram.com/turramurraunited" class="hover:underline text-gray-300 hover:text-tufc_yellow">Instagram</a> -->
            </li>
          </ul>
        </div>

        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="text-tufc_yellow font-bold uppercase tracking-wider ">Club</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-300 hover:text-tufc_yellow">About Us</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-300 hover:text-tufc_yellow">Grounds</a>
            </li>
            <li class="mt-2">
              <a href="/weather/" class="hover:underline text-gray-300 hover:text-tufc_yellow">Weather</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-sm">Copyright &copy;{{ getCurrentYear }} by <a :href="href">Turramurra United Football Club</a></div>
    </div>
  </footer>
</template>

<static-query>
  query {
    articles: allArticlePost(limit: 3) {
      edges {
        node {
          id
          slug
          path
          title
          sticky
        }
      }
    }
  }
  
</static-query>

<script>
import FooterSponsorsComponent from '../components/FooterSponsors.vue';

export default {
  components: {
    FooterSponsorsComponent,
  },
  data: () => ({
    href: 'https://turramurraunited.com.au',
  }),
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
