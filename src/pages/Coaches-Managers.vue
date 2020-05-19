<template>
  <Layout>
    <section class="pb-20 bg-gray-300 pt-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap ">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Coaches and Managers
            </h3>
            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Coaches and Managers are integral to the success of every team. Here we provide all the resources to ensure the coaches and managers have what
              they need to make things run smoothly.
            </p>
            <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"></p>
          </div>

          <div class="w-full md:w-4/12 px-4 mr-auto">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-tufc_red">
              <g-image src="~/assets/images/coaches-board.jpg" class="w-full align-middle rounded-t-lg" alt="Volunteer coaches and managers"></g-image>
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
                  Volunteering was never meant to be this much fun!
                </h4>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto p-8">
      <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20">
        <article v-for="edge in $page.coachesmanagers.edges" :key="edge.node.id" class="flex flex-col flex-wrap rounded overflow-hidden shadow-lg bg-white">
          <g-link :to="edge.node.slug" class="relative w-full">
            <div v-if="edge.node.featuredMediaImage">
              <g-image :src="edge.node.featuredMediaImage" class="w-full "> </g-image>
            </div>
            <div v-else>
              <g-image src="../assets/images/blue-white-footballs.jpg" fit="cover" width="400" height="200" class="w-full"></g-image>
            </div>
          </g-link>

          <div class="py-4">
            <g-link v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path"
              ><span class="p-2 uppercase tracking-widest text-sm text-tufc_red font-bold bg-gray-200 rounded mx-4">{{ tag.title }}</span></g-link
            >
          </div>

          <div class="px-6 py-4 flex-1">
            <div class="font-bold text-xl mb-2" v-html="edge.node.title"></div>
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
              <g-link :to="edge.node.slug">Read More</g-link>
            </button>
          </div>
        </article>
      </div>
      <!-- <pagination :info="$page.sponsors.pageInfo" v-if="$page.sponsors.pageInfo.totalPages > 1" /> -->
      <!-- <div class="flex justify-center bg-gray-200 h-16 -m-2"> -->
      <!-- <Pager :info="$page.allArticlePost.pageInfo" linkClass="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2" /> -->
      <!-- </div> -->
    </section>
  </Layout>
</template>

<page-query>
  {
    coachesmanagers: allArticlePage(
      filter:  { parent: { eq: 121 } }
      sort: [{ by: "menuOrder", order: ASC }]
    ) {
      edges {
        node {
          id
          title
          slug
          excerpt
          path
          menuOrder
          parent
          categories {
            id
            title
          }
          featuredMediaImage (width:400, height:200, fit: cover)
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
  components: {
    // Pager,
    Pagination,
  },
};
</script>
