<template>
  <div>
    <ul v-for="edge in $static.sponsors.edges" :key="edge.node.id" class="mb-4">
      <li class="mt-2 ">
        <g-link :to="edge.node.path" class="hover:underline text-gray-300 hover:text-tufc_yellow"> {{ edge.node.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<static-query>
    query {
      sponsors: allArticlePage(
        filter: { parent: { eq: 57 } }
        sort: [{ by: "menuOrder", order: ASC }]
      ) {
        edges {
          node {
            id
            title
            path
          }
        }
      }
    }
    
  </static-query>
