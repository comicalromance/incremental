<script setup>
import UpgradeItem from "./UpgradeItem.vue"
</script>

<template>
    <h3> Upgrades </h3>
    <br/>
    <el-space class="leftmargin" wrap :size="16">
      <UpgradeItem :class="{enabled: game.money >= game.getUpgradeCost(0) && !game.upgrades[0], 
        bought: game.upgrades[0]}" @click="game.buyUpgrade(0)">
          <template #title>Upgrade 1</template>
          <template #cost>${{ game.getUpgradeCost(0) }}</template>
          <template #description>Doubles income of workers.</template>
      </UpgradeItem>
      <UpgradeItem :class="{enabled: game.money >= game.getUpgradeCost(1) && !game.upgrades[1], 
        bought: game.upgrades[1]}" @click="game.buyUpgrade(1)">
          <template #title>Upgrade 2</template>
          <template #cost>${{ game.getUpgradeCost(1) }}</template>
          <template #description>Doubles income of .</template>
      </UpgradeItem>
      <UpgradeItem :class="{enabled: game.money >= game.getUpgradeCost(2) && !game.upgrades[2], 
        bought: game.upgrades[2]}" @click="game.buyUpgrade(2)">
          <template #title>Upgrade 3</template>
          <template #cost>${{ game.getUpgradeCost(2) }}</template>
          <template #description>Doubles income of .</template>
      </UpgradeItem>
      <UpgradeItem :class="{enabled: game.money >= game.getUpgradeCost(3) && !game.upgrades[3], 
        bought: game.upgrades[3]}" @click="game.buyUpgrade(3)">
          <template #title>Upgrade 4</template>
          <template #cost>${{ game.getUpgradeCost(3) }}</template>
          <template #description>Doubles global income.</template>
      </UpgradeItem>
      </el-space>
      <el-space :size="16" v-if="game.stage >= 4">
        <UpgradeItem :class="{enabled: game.money >= game.getUpgradeCost(4) && !game.upgrades[3], 
        bought: game.upgrades[4]}" @click="game.buyUpgrade(4)">
          <template #title>Upgrade 5</template>
          <template #cost>${{ game.getUpgradeCost(4) }}</template>
          <template #description>Make your click earn 20% of your income.</template>
        </UpgradeItem>
        <UpgradeItem :class="{enabled: game.money >= game.getUpgradeCost(5) && !game.upgrades[3], 
        bought: game.upgrades[5]}" @click="game.buyUpgrade(5)">
          <template #title>Upgrade 6</template>
          <template #cost>${{ game.getUpgradeCost(5) }}</template>
          <template #description>Double your clicking income.</template>
        </UpgradeItem>
      </el-space>

</template>
<style scoped>
  .text {
    font-size: 14px;
  }

  .leftmargin {
    margin-left: 16px;
  }

  h3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    color: darkslategrey;
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