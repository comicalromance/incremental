<script setup>
import Modal from "./Modal.vue"
</script>

<template>
    <div class="main">
        <div id="head">
            <Transition name="fade">
                <div v-if="game.money >= 25" class="progress">
                    <h3>Goal: 50</h3>
                </div>
            </Transition>
            <p v-if="game.money >= 10" class="header">
                <h1>{{ game.money }}</h1>
            </p>
            <div class="click" @click="game.clickMoney()">
                CLICK
            </div>
        </div>
        
        <div id="text">
            <Transition name="fade">
                <h3 v-if="game.money >= 1">Here lies an uninteresting button for you to click.</h3>
            </Transition>
            <Transition name="fade">
                <h3 v-if="game.money >= 5">Perhaps a bit too uninteresting...</h3>
            </Transition>
            <Transition name="fade">
                <h3 v-if="game.money >= 10">Let's shake it up a bit!</h3>
            </Transition>
        </div>

        <Modal v-if="game.money >= 50">
            <h1>The Score</h1>
            <br/>
            <p class="justify">
                Points. Grades. Ranking. We are all too familiar with the concept of scores, and how one single number can dictate so much
                of our circumstances and our behaviour. It is sometimes wielded as a disciplinary measure to threshold reward or punishment, other times
                an ordinal value deisgned to be compared and competed over, or even a feedback mechanism to reflect the notion of progress with
                the increase of a number. 
                <br/>
                <br/>
                Does one study and toil for hours at end just to earn a higher grade on their paper? Does one soullessly burn through Duolingo 
                modules just to extend their streak and climb up the leaderboards? Does one click on this button just to see a number increase
                marginally towards some progress or goal? 
            </p>
            <div class="click" @click="game.nextStage()">
                Proceed
            </div>
        </Modal>
    </div>
</template>

<style scoped>
p h1 {
  font-weight: 500;
  font-size: 3.2rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 400;
  color: darkslategrey;
}

.justify {
    text-align: justify;
}

.center {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.main h1,
.main h3 {
  text-align: center;
}

.progress {
    line-height: 3rem;
}

#head {
    text-align: center;
}

</style>

<script>
export default {
    data() {
        return {
            game: game,
        }
    }
}
</script>