<script setup>
import ProductionItem from "./ProductionItem.vue"
import EcosystemIcon from "./icons/IconEcosystem.vue"
</script>

<template>
    <h3>Production</h3>
    <ProductionItem :class="{enabled: game.money >= game.getCost(0) }" @click="game.buyItem(0)">
        <template #icon><EcosystemIcon /></template>
        <template #quantity>{{ game.getQuantity(0) }}</template>
        <template #heading>Item 1</template>
        Does something.
        <template #cost>
            Cost: ${{ game.getCost(0) }}
            <br>
            Makes: ${{ game.getBaseIncome(0) }}/s
        </template>
    </ProductionItem>
    <ProductionItem :class="{enabled: game.money >= game.getCost(1) }" @click="game.buyItem(1)">
        <template #icon><EcosystemIcon /></template>
        <template #quantity>{{ game.getQuantity(1) }}</template>
        <template #heading>Item 2</template>
        Does something.
        <template #cost>
            Cost: ${{ game.getCost(1) }}
            <br>
            Makes: ${{ game.getBaseIncome(1) }}/s
        </template>
    </ProductionItem>
    <ProductionItem :class="{enabled: game.money >= game.getCost(2) }" @click="game.buyItem(2)">
        <template #icon><EcosystemIcon /></template>
        <template #quantity>{{ game.getQuantity(2) }}</template>
        <template #heading>Item 3</template>
        Does something.
        <template #cost>
            Cost: ${{ game.getCost(2) }}
            <br>
            Makes: ${{ game.getBaseIncome(2) }}/s
        </template>
    </ProductionItem>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
  font-weight: 400;
  color: darkslategrey;
}
.main h1,
.main h3 {
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