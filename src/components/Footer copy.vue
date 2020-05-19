<template>
  <!-- Footer -->
  <footer class="bg-gray-900">
    <div class="container mx-auto px-6 pt-10 pb-6 text-white">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold"><g-link to="/news">Latest</g-link></h5>
          <ul v-for="edge in $static.articleTitles.edges" :key="edge.node.id" class="mb-4">
            <li class="mt-2 ">
              <g-link :to="edge.node.path" class="hover:underline text-gray-300 hover:text-tufc_yellow">
                <span v-if="edge.node.sticky">** </span>
                {{ edge.node.title }}</g-link
              >
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Sponsors</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-300 hover:text-tufc_yellow">Chadwick Real Estate</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-300 hover:text-tufc_yellow">Lazana Pizzeria</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-300 hover:text-tufc_yellow">Business Plaza</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Social</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-300 hover:text-tufc_yellow">Facebook</a>
            </li>
            <li class="mt-2">
              <a href="https://instagram.com/turramurraunited" class="hover:underline text-gray-300 hover:text-tufc_yellow">Instagram</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Club</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-300 hover:text-tufc_yellow">About Us</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-300 hover:text-tufc_yellow">Contact</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-300 hover:text-tufc_yellow">Grounds</a>
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
  articleTitles: allArticlePost(limit: 3) {
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
export default {
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
