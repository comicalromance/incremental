<script setup>
import Modal from "./Modal.vue"
import ProductionList from "./ProductionList.vue"
</script>

<template>
    <div class="main">
        <div id="left">
            <div id="head">
                <div class="progress">
                    <h3>Goal: $5000</h3>
                </div>
                <p class="header">
                    <h3>Money</h3>
                    <h1>${{ Math.floor(game.money) }}</h1>
                    <h4>Income: ${{ game.incomePerSecond }}/s</h4>
                </p>
                <div class="click" @click="game.clickMoney()">
                    WORK
                </div>
            </div>
            <div id="text">
                <Transition name="fade">
                    <h3 v-if="game.money >= 5"></h3>
                </Transition>
            </div>
        </div>
        <div id="right">
            <ProductionList></ProductionList>
        </div>
    </div>
    <Modal v-if="game.money >= 5000">
            <p>
                Hello world!
            </p>
            <div class="click" @click="game.nextStage()">
                CLICK
            </div>
    </Modal>
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

h4 {
    font-size: 1.2rem;
    font-weight: normal;
    top: -20px;
}

.header h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: darkslategrey;
}
.main h1,
.main h3 {
  text-align: center;
}

.main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
}

#right {
     border-left: 1px black solid;
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
    }, 
    watch: {
    }
}
</script>