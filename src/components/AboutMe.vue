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
                    I am passionate about programming, and I see it  
                    as a form of creative expression. Everyday I endeavor to learn 
                    more, whether that mean exploring new regression models or 
                    new frameworks for developing code. Really, I just love what I do :)
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
                    <ul>
                        <li>
                            SWE <b>Intern at NASA</b>'s Langley Research Center <br>
                        </li>
                        <li>
                            <b>Outstanding First-Year </b> 
                            <b-link href="https://engineering.purdue.edu/VIP/news/vip-awards-announced-for-spring-2021">award </b-link> 
                            from Purdue's VIP program
                        </li>
                        <li>
                            Joined the <b-link href="https://www.blackandgoldautonomousracing.com/">Black &amp; Gold</b-link> racing team.
                        </li>
                    </ul>
                </b-card-text>
                <b>2020</b>
                <b-card-text>
                    <ul>
                        <li>
                            Started studying CS at Purdue
                        </li>
                        <li>
                            Began research under <b-link active href="https://web.ics.purdue.edu/~elgamala/AMP-VIP/index.html">AMP</b-link>.
                        </li>
                    </ul>
                </b-card-text>

                <b>Future</b>
                <b-card-text>
                    TBD - contact me if interested ;)
                </b-card-text>
                <b-button href="https://drive.google.com/file/d/101hWcw9is4HWgL6XYwKyIWw3HgCFGhbX/view?usp=sharing" 
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
                    Outside of school, I love to stay active! In my free time I love to hike, bike, and play basketball with friends.

                </b-card-text>
                <b-card-text>
                    I'm always looking for new things to try, and right now I'm 
                    eyeing a YouTube Channel and an electric skateboard. <br>
                    Future plans include a trading webapp and using an
                    Arduino I won a few months ago - stay tuned ;)
                </b-card-text>
                <b-card-text>
                    I'm a pretty big anime fan, some of my favorites are Attack on Titan, Naruto, and Evangelion
                </b-card-text>
                <b-card-text>
                    I made it on NASA's 
                    <b-link href="https://www.instagram.com/p/CRRUMdujBiU/">Instagram</b-link> (Tip #7)! 
                </b-card-text>
            </b-card>
    </b-card-group>
  </div>
    </b-container>
</template>

<script>
export default {
    data: function () {
        return {}
    }
};
</script>

<style scoped>
.card {
    width: 20em;
    margin: 1em;
}
</style>
