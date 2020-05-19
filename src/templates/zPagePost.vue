<template>
  <Layout>
    <article class="grid grid-cols-1 lg:grid-cols-2 mx-20 gap-4">
      <!-- <article class="max-w-screen-sm mx-auto px-6 sm:px-12 pt-16"> -->
      <div class="font-bold text-xl mb-2 col-span-2">
        {{ $page.article.title }}
        <span class="text-gray-400 text-sm"
          ><time :datetime="$page.article.date" class="capitalize">{{ $page.article.date }}</time></span
        >
      </div>
      <div v-if="$page.article.featuredMediaImage">
        <g-image :src="$page.article.featuredMediaImage" class="sm-hidden"></g-image>
      </div>
      <div v-else>
        <g-image src="../assets/images/blue-white-footballs.jpg" fit="cover" width="1000" height="400"></g-image>
      </div>
      <div v-if="$page.article.content">
        <div v-html="$page.article.content" class="tufc_content max-w-screen-md text-base leading-normal text-gray-700"></div>
      </div>
      <div v-else>No further content for this article?</div>
    </article>
  </Layout>
</template>

<page-query>
  query($path: String!) {
      article: articlePost(path: $path) {
          id
          title
          content
          date (format: "ddd, D MMM")
          featuredMediaImage (width:500, fit: cover)
      }
  }
</page-query>

<script>
export default {
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
