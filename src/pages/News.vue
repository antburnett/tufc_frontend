<template>
  <Layout>
    <section class="pb-20 bg-gray-300 pt-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap ">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              What's Happening?
            </h3>
            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              This is the place for all Club happenings - news, announcements, courses, special events, and more.
            </p>
            <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              We also post weather updates here and on social media.
            </p>
          </div>

          <div class="w-full md:w-4/12 px-4 mr-auto">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-tufc_red">
              <g-image src="~/assets/images/social-media.jpg" class="w-full align-middle rounded-t-lg" alt="ball and hands"></g-image>
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block"
                  style="height: 95px; top: -94px;"
                >
                  <polygon points="-30,95 583,95 583,65" class="text-tufc_red fill-current"></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Get Social
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Get a notification as soon as news breaks.
                </p>
                <div class="flex flex-wrap items-center justify-center px-2 pt-10 py-2">
                  <button class="mx-2 px-3 py-1 bg-tufc_blue text-sm text-white font-semibold rounded hover:text-tufc_yellow">
                    <a href="https://facebook.com/turramurraunited/" target="_blank">Facebook</a>
                  </button>
                  <button class="px-3 py-1 bg-tufc_blue text-sm text-white font-semibold rounded hover:text-tufc_yellow">
                    <a href="https://instagram.com/turramurraunited/" target="_blank">Instagram</a>
                  </button>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4">
      <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-auto mt-10">
        <article v-for="edge in $page.articles.edges" :key="edge.node.id" class="flex flex-col flex-wrap rounded overflow-hidden shadow-lg bg-white">
          <g-link :to="edge.node.path" class="relative w-full">
            <div v-if="edge.node.featuredMediaImage">
              <g-image :src="edge.node.featuredMediaImage" class="w-full "> </g-image>
            </div>
            <div v-else>
              <g-image src="../assets/images/blue-white-footballs.jpg" fit="cover" width="400" height="200" class="w-full"></g-image>
            </div>
            <div v-if="edge.node.sticky">
              <div class="absolute top-0 bg-tufc_yellow text-tufc_red text-center tracking-widest absolute px-2 mt-2">IMPORTANT</div>
            </div>
          </g-link>

          <!-- <div class="py-4">
            <g-link v-for="category in edge.node.categories" :key="category.id" :to="category.path"
              ><span class="p-4 uppercase tracking-widest text-sm text-tufc_red font-bold ">{{ category.title }}</span></g-link
            >
          </div> -->
          <div class="py-4">
            <g-link v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path"
              ><span class="p-4 uppercase tracking-widest text-sm text-tufc_red font-bold ">{{ tag.title }}</span></g-link
            >
          </div>

          <div class="px-6 py-4 flex-1">
            <div v-html="edge.node.title" class="font-bold text-xl mb-2">{{ edge.node.title }}</div>
            <div v-if="edge.node.excerpt">
              <div v-html="edge.node.excerpt" class="text-gray-700 text-base min-h-full">...</div>
            </div>
            <div v-else>
              <div class="text-gray-700 text-base min-h-full">No content to display!</div>
            </div>
          </div>

          <div class="flex items-center justify-between px-4 py-2 bg-tufc_red text-white w-full">
            <h1 class="text-gray-200 font-bold text-xs uppercase">{{ edge.node.date }}</h1>
            <button class="px-3 py-1 bg-tufc_yellow text-sm text-gray-900 font-semibold rounded hover:text-white">
              <g-link :to="edge.node.path">Read More</g-link>
            </button>
          </div>
        </article>
      </div>
      <pagination :info="$page.articles.pageInfo" v-if="$page.articles.pageInfo.totalPages > 1" />
      <!-- <div class="flex justify-center bg-gray-200 h-16 -m-2"> -->
      <!-- <Pager :info="$page.allArticlePost.pageInfo" linkClass="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2" /> -->
      <!-- </div> -->
    </section>
  </Layout>
</template>

<page-query>
   query ($page: Int) {
    articles: allArticlePost(perPage: 6 page: $page, sort:[{by:"sticky"},{by:"date"}]) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          slug
          path
          title
          excerpt
          sticky
          date (format: "ddd, D MMM")
          featuredMediaImage (width:400, height: 200, fit: cover)
          categories{
            id
            title
            path
          }
          tags{
            id
            title
          }
        }
      }
    }
  }
  </page-query>

<script>
// import { Pager } from 'gridsome';
import Pagination from '@/components/Pagination';
export default {
  metaInfo: {
    title: 'News',
  },
  components: {
    // Pager,
    Pagination,
  },
};
</script>
