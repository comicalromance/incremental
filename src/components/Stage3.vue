<script setup>
import Modal from "./Modal.vue"
import ProductionList from "./ProductionList.vue";
import UpgradeList from "./UpgradeList.vue";
</script>

<template>
    <div class="main">
        <div id="left">
            <div id="head">
                <div class="progress">
                    <el-progress :text-inside="true" :stroke-width="30" :percentage="game.highestMoney/100000 * 100" status="success">
                        <span style="color:black">Goal: $100,000</span>
                    </el-progress>
                </div>
                <p class="header">
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
            <UpgradeList></UpgradeList>
        </div>
    </div>
    <Modal v-if="game.money >= 100000">
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