<template>
  <b-container align="center">
    <div>
      <h2> Projects </h2>
      <h5> Interests in Software Engineering, Computer Vision</h5>
    </div>

<!--
    <b-card-group deck class="d-flex justify-content-center flex-wrap">
      <div class="project-card" 
      v-for="project in projects"
      :key="project.name">
        <a :href="project.link">
          <h4>{{project.name}}</h4>
          <img :src="project.img_src" :alt="project.img_alt">
          <p>{{project.description}}</p>
        </a>
      </div>
    </b-card-group>
-->

    <b-card-group deck class="d-flex justify-content-center flex-wrap">
      <b-card 
        v-for="project in projects"
        :key="project.name"
        :img-src="project.img_src"
        :img-alt="project.alt"
        img-width="20em"
        img-top
        :tag="article"
        :class="mb-2"

        :header="project.name"
        header-bg-variant="danger"
        header-text-variant="white"

        border-variant="dark"
      >
        <b-card-text>
          {{project.description}}
        </b-card-text>
        <b-button
          variant="success"
          :href="project.link"
        >
          Repository
        </b-button>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
    data: function () {
    return {
      projects: [
        {
          name: "Autonomous Motorsports Purdue",
          img_src: require("../assets/projects/fronk.gif"),
          alt: "Image",
          link: "https://github.com/Navigation-Team-AMP/autonomous_car_simulation",
          description:
            "Developed a convolutional neural network in PyTorch to control a vehicle. \
            We used a waypoint-based implementation inspired by PilotNet. \
            This project also required a backend web server \
            which was built with Flask and SocketIO",
          additional_info: ""
        },
        {
          name: "Electoral Analysis",
          img_src: require("../assets/projects/electoral.png"),
          alt: "Image",
          link: "https://github.com/arefmalek/Electoral_census",
          description:
            "UC Berkeley Datathon Winner. \
            An analysis that exposes the Electoral College's disenfranchisement of minorities, women, and the impoverished.",
        },
        {
          name: "Demographics CNN",
          img_src: require("../assets/projects/Race_CNN.png"),
          alt: "Image",
          link: "https://github.com/arefmalek/CNN_AgeRaceGender_PyTorch",          
          description:
            "The first CNN that I wrote from scratch. A neural network that can detect race, age, and gender purely from imagery.",
        },
        {
          name: "Bobby Buddy",
          img_src: require("../assets/projects/demo_songlist.gif"),
          alt: "Image",
          link: "https://github.com/arefmalek/freebobby",          
          description:
            "An interactive Discord bot that improves mental well-being with relevant activity recommendations and productivity assistance.",
        },
        {
          name: "arefmalek.github.io",
          img_src: require("../assets/projects/website.png"),
          alt: "Image",
          link: "https://github.com/arefmalek/arefmalek.github.io",          
          description:
            "You're looking at it! This is my personal website, currently deployed in Vue.js as a Single Page Application (SPA)",
        },
        {
          name: "Frank Ocean Bot",
          img_src: require("../assets/projects/twitter_bot.png"),
          alt: "Image",
          link: "https://github.com/arefmalek/frank_ocean_bot",          
          description:
            "One of my first projects! A small winter break project to pay homage to one of my favorite musicians.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  min-width: 15em;
  max-width: 20em;
  margin: 1em;
}


.project-card {
    margin: 1em;
    background: #D4ADCF;
    overflow: hidden;
    border-radius: 0.2em;
    border-style: solid;
    border-width: 0.01rem;
    border-color: #0C8346;
    box-shadow: 5px; 
    transition: all 200ms ease;  


    width: 25em;
    height: 25rem;
    
}

.project-card img {
    display: block;
    width: 100%;
    height: auto;
    box-sizing: content-box;
}

.project-card:hover {
    transform: scale(1.15);
    background: #dee8d5; 
    border-color: rgb(252, 0, 0);
    border-width: 0.1rem;
}

.project-card a {
  text-decoration: none;
}
.project-card a, h4, p {
    color: rgb(17, 17, 17);
}

.project-card p {
  margin: 2px
}
</style>
