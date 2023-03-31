<script setup>
import Modal from "./Modal.vue"
import ProductionList from "./ProductionList.vue"
</script>

<template>
    <div class="main">
        <div id="left">
            <div id="head">
                <div class="progress">
                    <el-progress :text-inside="true" :stroke-width="30" :percentage="game.highestMoney/3000 * 100" status="success">
                        <span style="color:black">Goal: $3000</span>
                    </el-progress>
                </div>
                <p class="header">
                    <h1>${{ Math.floor(game.money) }}</h1>
                    <h4>Income: ${{ parseFloat(game.incomePerSecond.toFixed(1)) }}/s</h4>
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
    <Modal v-if="game.money >= 3000">
        <h1>The Fantasy</h1>
            <br/>
            <p class="justify">
                Sometimes, it would be great to escape the harsh realities of the world, and be embraced by the limitless possibilites within
                the digital. Bits and bytes can be tuned and modified effortlessly to satisfy whatever hedonistic desire and manifest a virtual fantasy,
                one separate from yet anchored to the real world.
                <br/>
                <br/>
                Would it be wrong to claim the same for gamification? Does increasing your level in Duolingo truly reflect a 1 to 1 advancement in
                language competency, or does it pander to desires for self-improvement and gratification? Does the Social Credit System in China or
                star system in Black Mirror's Nosedive truly represent the moral character of an individual, or is it subject to the whims of the elite
                or the tyranny of the government?
                <br/>
                <br/>
                Ultimately, we find that digital representations are often but simulacra: the representation having evolved to become more 'real' or important
                than the represented.
            </p>
            <div class="click" @click="game.nextStage()">
                Proceed
            </div>
    </Modal>
</template>

<style scoped>
p h1 {
  font-weight: 500;
  font-size: 3.2rem;
  top: -10px;
}

.justify {
    text-align: justify;
}

.center {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
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
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
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