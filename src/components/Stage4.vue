<script setup>
import Modal from "./Modal.vue"
import ProductionList from "./ProductionList.vue";
import KnowledgeList from "./KnowledgeList.vue";
import UpgradeList from "./UpgradeList.vue";
</script>

<template>
    <div class="main">
        <div id="left">
            <div id="head">
                <div class="progress">
                    <el-progress :text-inside="true" :stroke-width="30" :percentage="game.highestMoney/1000000 * 100" status="success">
                        <span style="color:black">Goal: $1,000,000</span>
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
            </el-tabs>
        </div>
    </div>
    <Modal v-if="game.money >= 1000000">
        <h1>The Quantifed Self</h1>
            <br/>
            <p class="justify">
                It must be admitted that a fundamental difference exists between the game and gamified: the game presents only a virtual, artificial
                self, while the gamified leverages technology to connect the body and develop self-knowledge. To bridge the gap into the gamified,
                the self must be involved by tracking the body, from health information to consumption patterns, or even personal input and stakes.
                <br/>
                <br/>
                With enough data points, the quantified self is then manifested, a highly precise and automated reflection of the individual. This self
                thus becomes the subject of self-governance and self-improvement, driven by feedback mechanisms that encourage more engagement.
                <br/>
                <br/>
                Yet, every data point that comprises the quantified self exists as a piece of information for corporations to capture. Every
                quiz you submit or run you complete are bits and bytes that feed straight into corporate databases. Gamification
                empowers the process of surveillance and datafication, enabling corporations to better understand behavioural patterns and churn more
                effective and manipulative algorithms of control. 
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