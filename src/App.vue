<template >
  <div id="app">
    <b-img 
      src="./assets/sully_pic_ref.jpeg" 
      rounded 
      width="250px"
    ></b-img>
    <h1>Aref Malek</h1>
    <h3>CS Honors @ Purdue</h3>
    <h3>SDE Intern @ AWS AI</h3>
    
    <social-links />
<div class="accordion" role="tablist">
    <b-container>
      <b-button
        v-for="section in sections"
        :key="section.name"
        variant="dark"
        size="lg"
        style="margin: 0.75em"
        v-b-toggle="section.id"
      >
        {{section.name}}
      </b-button>
    </b-container>    

  <b-collapse visible id="collapse-projects" accordion="my-accordion" role="tabpanel" class="mt-2">
    <projects />
  </b-collapse>
  <b-collapse id="collapse-about-me" accordion="my-accordion" role="tabpanel" class="mt-2">
    <about-me />    
  </b-collapse>
  <b-collapse id="collapse-contact-me" accordion="my-accordion" role="tabpanel" class="mt-2">
    <contact-form />    
  </b-collapse>
</div>


  </div>
</template>

<script>
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import ContactForm from "./components/ContactForm";
import AboutMe from "./components/AboutMe"

export default {
  components: {
    'projects': Projects,
    'social-links': SocialLinks,
    'contact-form': ContactForm,
    'about-me': AboutMe
  },
  data: function() {
    return {
      sections: [
        {
          name: "Portfolio",
          id: "collapse-projects",
        },
        {
          name: "About Me",
          id: "collapse-about-me",
        },
        {
          name: "Contact Me",
          id: "collapse-contact-me",
        },
      ]
    }
  }
};
</script>

<style lang="scss">
template {
  background: #7cc6fe;
}
#app {
  margin: 50px;
  text-align: center;
  background: #7cc6fe;
}

#app h1, h2, h3, h5 {
  margin-top: 1em;
  color: azure;
}

.accordion {
  margin: 1em;
}

.accordion b-button {
  margin: 1em;
}
</style>
