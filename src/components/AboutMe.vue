<template>
    <b-container>
        <h2>About Me</h2>
    
    <div>
        <b-card-group deck class="d-flex justify-content-center flex-wrap">
            <b-card
            border-variant="primary"
            header="Who am I?"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
            >
                <b-card-text>
                    I'm <b>Aref Malek</b>, an undergrad at 
                    <b>Purdue</b> university studying 
                    <b> computer science</b>
                </b-card-text>

                <b-card-text>
                    I am passionate about programming, and I see it almost 
                    as a form of creative expression. Everyday I endeavor to learn 
                    more, whether that mean exploring new regression models or 
                    new frameworks for developing code. I just love what I do :)
                </b-card-text>

                <b-card-text>
                    In the near future, I want to contribute to the autonomous
                    vehicle field, as it's the most practical marriage of computer vision and 
                    software engineering.
                </b-card-text>
            </b-card>

            <b-card
                border-variant="secondary"
                header="What have I done?"
                header-border-variant="secondary"
                header-bg-variant="secondary"
                header-text-variant="white"
                align="center"
            >
                <b>2021</b>
                <b-card-text>
                    <b> AI / ML Intern</b> at NASA's Langley Research Center <br>
                    Outstanding First-Year
                    Engineer by Purdue's Vertically integrated 
                    Projects (VIP) group <br>
                </b-card-text>
                <b>2020</b>
                <b-card-text>
                    Started studying CS at Purdue <br>
                    Began research under Dr. Gamal and AMP
                </b-card-text>

                <b>Future</b>
                <b-card-text>
                    TBD - contact me if interested ;)
                </b-card-text>
                <b-button href="https://drive.google.com/file/d/1JIY8z4uurnoh8hvsu02c5kwftyaAtVmP/view?usp=sharing" 
                    variant="primary">
                    Resume
                </b-button>            
            </b-card>

            <b-card 
                border-variant="danger" 
                header="Other facts"
                header-border-variant="danger"
                header-bg-variant="danger"
                header-text-variant="white"
                align="center"
            >
                <b-card-text>
                    Outside of school, I love to stay active! That means lots of hiking, biking, and (recently) basketball!
                </b-card-text>
                <b-card-text>
                    I'm always looking for new things to try, and right now I'm 
                    eyeing a YouTube Channel and an electric skateboard (in progress!). <br>
                    Some future plans involve utilizing an Arduino I won a few months 
                    ago and hopefully applying some Neural Network
                    with it - stay tuned!
                </b-card-text>
                <b-card-text>
                    I'm a pretty big anime fan, some of my favorites are Attack on Titan, Naruto, and Evangelion
                </b-card-text>
            </b-card>
    </b-card-group>
  </div>
    </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
    width: 20em;
    margin: 1em;
}
</style>
