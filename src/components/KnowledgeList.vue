<script setup>
import DevelopmentItem from "./DevelopmentItem.vue";
import MathGame from "./MathGame.vue";
import TriviaGame from "./TriviaGame.vue";
import LanguageGame from "./LanguageGame.vue";
import IconDocumentation from "./icons/IconDocumentation.vue";
import IconStrength from "./icons/IconStrength.vue";
import IconMath from "./icons/IconMath.vue";
</script>

<template>
    <div class="leftmargin">
        <h3> Knowledge </h3>
        <h1>{{ game.knowledge }}</h1>
        <h3 class="spaced"> Library </h3>
        <div>
            <el-button @click="toggleVisibility(2)">
                Consult book of Trivia
            </el-button>
            <el-button @click="toggleVisibility(1)">
                Consult tome of Language
            </el-button>
            <el-button @click="toggleVisibility(0)">
                Consult scroll of Math
            </el-button>
        </div>
        <h3 class="spaced"> Development </h3>
        <div>
            <el-space wrap :size="16">
                <DevelopmentItem :class="{enabled: game.knowledge >= game.getDevelopmentCost(0)}" @click="game.buyDevelopment(0)">
                    <template #title>Invest in Wisdom</template>
                    <template #cost>{{ game.getDevelopmentCost(0) }} Know</template>
                    <template #description>Multiplies global income by 50%.</template>
                    <template #icon><IconDocumentation/></template>
                </DevelopmentItem>
                <DevelopmentItem :class="{enabled: game.knowledge >= game.getDevelopmentCost(1)}" @click="game.buyDevelopment(1)">
                    <template #title>Invest in Strength</template>
                    <template #cost>{{ game.getDevelopmentCost(1) }} Know</template>
                    <template #description>Multiplies clicking power by 50%.</template>
                    <template #icon><IconStrength/></template>
                </DevelopmentItem>
                <DevelopmentItem :class="{enabled: game.knowledge >= game.getDevelopmentCost(2)}" @click="game.buyDevelopment(2)">
                    <template #title>Invest in Efficiency</template>
                    <template #cost>{{ game.getDevelopmentCost(2) }} Know</template>
                    <template #description>Decreases costs by 20%.</template>
                    <template #icon><IconMath/></template>
                </DevelopmentItem>
            </el-space>
        </div>
        <MathGame v-if="isVisible[0]" @closeThis="toggleVisibility(0)"></MathGame>
        <LanguageGame v-if="isVisible[1]" @closeThis="toggleVisibility(1)"></LanguageGame>
        <TriviaGame v-if="isVisible[2]" @closeThis="toggleVisibility(2)"></TriviaGame>
    </div>
</template>

<style scoped>

h3 {
  font-size: 1.2rem;
  font-weight: 400;
  color: darkslategrey;
}

.spaced {
    margin-bottom: 1rem;
    margin-top: 1rem;
}

h1 {
    font-size: 2rem;
}
.leftmargin {
    margin-left: 16px;
    text-align: center;
}
</style>

<script>
export default {
    data() {
        return {
            game: game,
            isVisible: [false, false, false]
        }
    },
    methods: {
        toggleVisibility(i) {
            this.isVisible[i] = !this.isVisible[i];
        }
    }
}
</script>