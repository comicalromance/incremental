<script setup>
import Modal from "./Modal.vue"
</script>

<template>
    <div class="main">
        <h1>The Surveillance Report</h1>
        <p class="justify">
            We have come to the end of the game. Through this short demonstration of features, I hope that you have better understood
            the game mechanisms (scores, upgrades, achievements, etc.) and concepts that have (to some extent) led you to click on the button
            a total of <span class="strong">{{ game.totalClicks }}</span> times. These are the same tools that allow gamification to exert control over their players.
            <br/>
            <br/>
            I have also tried to implement some semblance of a report, in a bid to caution against the reality of surveillance in gamified
            systems. Admittedly, the scope of surveillance is quite limited within the confines of a web browser and lack of resources. However,
            may this still serve as some warning about how much corporations can really know about you.

            <br/>
            <br/>
            <h3>Time played: {{ new Date((new Date().getTime() / 1000 - game.startTime) * 1000).toISOString().slice(11, 19) }}</h3>
            <h3>Math Minigames played: {{ game.mathPlayed }}</h3>
            <h3>Math Minigames accuracy: {{ game.mathWin / game.mathPlayed }}</h3>
            <h3>Trivia Minigames played: {{ game.triviaPlayed }}</h3>
            <h3>Trivia Minigames accuracy: {{ game.triviaWin / game.triviaPlayed }}</h3>
            <h3>Language Minigames played: {{ game.languagePlayed }}</h3>
            <h3>Language Minigames accuracy: {{ game.languageWin / game.languagePlayed }}</h3>
            <br/>
            Potential Improvements: 
            <li>
                Adding more languages so the user's favourite language can be determined
            </li>
            <li>
                Organizing the trivia minigames by category so the user's favourite / best performing subject or even age / profession can be
                hinted at
            </li>
            <br/>
            <br/>
            Thank you for playing! To reset the game, please click the reset button and refresh the page.
        </p>
        <div class="click" @click="game.resetGame()">
            Reset
        </div>
    </div>
</template>

<style>


</style>

<style scoped>

.strong {
    font-weight: 500;

}
.justify {
    text-align: justify;
}

.center {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

</style>

<script>
export default {
    data() {
        return {
            game: game,
        }
    }, 
}
</script>