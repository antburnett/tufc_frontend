<template>
  <Layout>
    <div class="container mx-auto px-4">
      <div class="items-start flex flex-wrap mt-10">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-10 pb-10">
          <div v-if="$page.article.featuredMediaImage">
            <g-image :src="$page.article.featuredMediaImage" class="max-w-full rounded-lg shadow-lg"></g-image>
          </div>
        </div>

        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <h2 class="text-3xl font-semibold" v-html="$page.article.title"></h2>
            <div class="py-4 uppercase tracking-widest text-sm text-tufc_blue font-bold">
              Last updated <time :datetime="$page.article.date">{{ $page.article.date }}</time>
            </div>

            <div class="py-4">
              <g-link v-for="tag in $page.article.tags" :key="tag.id" :to="tag.path"
                ><span class="pr-4 uppercase tracking-widest text-sm text-tufc_red font-bold ">{{ tag.title }}</span></g-link
              >
            </div>

            <div v-if="$page.article.content">
              <div v-html="$page.article.content" class="tufc_content mt-4 text-lg leading-relaxed text-gray-600"></div>
            </div>
            <div v-else>No further content for this article?</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($path: String!) {
      article: articlePage(path: $path) {
          id
          title
          content
          date (format: "ddd, D MMM")
          featuredMediaImage (width:500, fit: cover)
          tags{
            id
            title
          }
      }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'TUFC',
      titleTemplate: this.$page.article.title,
    };
  },
  computed: {
    hasContent() {
      return !!this.$page.article.content;
    },
  },
};
</script>

<style>
.tufc_content p {
  margin-bottom: 20px;
}
h2 {
  font-size: 1.5rem;
}
h3 {
  font-size: 1.25rem;
}
.tufc_content a {
  text-decoration: underline;
}
</style>
