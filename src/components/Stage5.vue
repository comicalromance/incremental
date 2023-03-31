<script setup>
import Modal from "./Modal.vue"
import ProductionList from "./ProductionList.vue";
import KnowledgeList from "./KnowledgeList.vue";
import UpgradeList from "./UpgradeList.vue";
import AchievementList from "./AchievementList.vue";
</script>

<template>
    <div class="main">
        <div id="left">
            <div id="head">
                <div class="progress">
                    <el-progress :text-inside="true" :stroke-width="30" :percentage="game.highestMoney/10000000 * 100" status="success">
                        <span style="color:black">Goal: $10,000,000</span>
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
            <el-tabs class="tabs">
                <el-tab-pane label="Production">
                    <ProductionList></ProductionList>
                    <UpgradeList></UpgradeList>
                </el-tab-pane>
                <el-tab-pane label="Knowledge">
                    <KnowledgeList></KnowledgeList>
                </el-tab-pane>
                <el-tab-pane label="Achievements">
                    <AchievementList></AchievementList>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <Modal v-if="game.money >= 10000000">
        <h1>Black Boxes of Control</h1>
            <br/>
            <p class="justify">
                Cost. Profit. Multiplier. Knowledge. As systems evolve to become more complex, manual analysis and decision making by individuals
                seems to falter. Instead, we substitute it with mathematical tools and models, which are more powerful than any human mind, and 
                more deterministic than even the most stoic individual.
                <br/>
                <br/>
                We subsume more and more control over to algorithms, yet understand less and less about how it is derived, instead blindly asserting
                a high level of 'algorithmic truth' to these black boxes. By blindly following their instruction, we unwittingly cede control to the algorithm,
                and let the data (or the agents behind the data) form our perspective of the truth.
            </p>
            <div class="click" @click="game.nextStage()">
                Proceed
            </div>
    </Modal>
</template>

<style>


</style>

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
.main h3, 
#head {
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

</style>

<script>
export default {
    data() {
        return {
            game: game,
            tab: "first"
        }
    }, 
}
</script>