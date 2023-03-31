<script setup>
import DevelopmentItem from "./DevelopmentItem.vue";
</script>

<template>
    <div class="leftmargin">
        <h3> Knowledge </h3>
        <h1>{{ game.knowledge }}</h1>
        <h3 class="spaced"> Library </h3>
        <div>
            <el-button>
                Consult scroll of Math
            </el-button>
            <el-button>
                Consult tome of Language
            </el-button>
            <el-button>
                Consult book of Trivia
            </el-button>
        </div>
        <h3 class="spaced"> Development </h3>
        <div class="leftalign">
            <el-space wrap :size="16">
                <DevelopmentItem :class="{enabled: game.knowledge >= game.getDevelopmentCost(0)}" @click="game.buyDevelopment(0)">
                    <template #title>Invest in Wisdom</template>
                    <template #cost>{{ game.getDevelopmentCost(0) }} Know</template>
                    <template #description>Multiplies global income by 10%.</template>
                </DevelopmentItem>
                <DevelopmentItem :class="{enabled: game.knowledge >= game.getDevelopmentCost(1)}" @click="game.buyDevelopment(1)">
                    <template #title>Invest in Strength</template>
                    <template #cost>{{ game.getDevelopmentCost(1) }} Know</template>
                    <template #description>Multiplies clicking power by 50%.</template>
                </DevelopmentItem>
                <DevelopmentItem :class="{enabled: game.knowledge >= game.getDevelopmentCost(2)}" @click="game.buyDevelopment(2)">
                    <template #title>Invest in Wisdom</template>
                    <template #cost>{{ game.getDevelopmentCost(2) }} Know</template>
                    <template #description>Increases global income by 10%.</template>
                </DevelopmentItem>
            </el-space>
        </div>
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
        }
    }, 
}
</script>