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
            <UpgradeList></UpgradeList>
        </div>
    </div>
    <Modal v-if="game.money >= 100000">
        <h1>The Illusion of Choice</h1>
            <br/>
            <p class="justify">
                Operating in games and gamified systems, one might be presented with a plethora of decisions: what resource to invest in,
                what path to follow, what upgrade to purchase and so on. Yet, does the abundance of choices truly offer true freedom? Among
                the tree of decisions an optimal path is likely to reveal itself upon scrutiny, with the path carved either by circumstance
                or (more concerningly) by deliberate means. If a rational agent were subject to institutionalized desires like consumption 
                or competition and driven to optimize, would there not only be one reasonable path to take, as choosing any other path would
                be folly?
                <br/>
                <br/>
                Deleuze presents the notion of a freeway, a structure designed not to enclose, but extend the means of control. Of course,
                any driver is "free" not to go on the freeway, yet, to get from destination A to B in the shortest time, isn't the freeway
                the only way to go? To rebel against the control of the freeway would be to forge the indirect, unoptimal path, and to resist 
                what has been institutionalized by society. The alternative path presents itself as an extremely underwhelming option, 
                providing only an illusion of choice. We are thus funneled along the crafted path, willingly submitting ourselves to the 
                control of its creator. 
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