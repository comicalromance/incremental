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
            <p>
                Hello world!
            </p>
            <div class="click" @click="game.nextStage()">
                CLICK
            </div>
        </Modal>
    </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 3.2rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 400;
  color: darkslategrey;
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