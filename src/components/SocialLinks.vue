<template>
  <b-container>
    <b-button
      v-for="link in links"
      :key="link.name"
      :href="link.url"

      v-b-tooltip.hover.top
      :title="link.name"

      variant="outline-danger"
      size="lg"
      style="margin: 0.5em"
    >
      <b-icon :icon=link.icon></b-icon>
    </b-button>
  </b-container>
</template>

<script>
export default {
  data: function () {
    return {
      links: [
        {
          name: "GitHub",
          url: "https://github.com/arefmalek",
          icon: "Github",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/aref-malek/",
          icon: "Linkedin",
        },
        {
          name: "Blog",
          url: "https://arefmalek.github.io/blog/",
          icon: "Pencil",
        }
      ],
    };
  },
};
</script>

<style scoped>
b-container {
  margin: 1em;
}

button {
  margin: 1em;
}
</style>
