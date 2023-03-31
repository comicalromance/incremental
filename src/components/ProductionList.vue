<script setup>
import ProductionItem from "./ProductionItem.vue"
import IconWorker from "./icons/IconWorker.vue";
import IconStore from "./icons/IconStore.vue";
import IconBusiness from "./icons/IconBusiness.vue";
</script>

<template>
    <h3>Production</h3>
    <ProductionItem :class="{enabled: game.money >= game.getCost(0) }" @click="game.buyItem(0)">
        <template #icon><IconWorker/></template>
        <template #quantity>{{ game.getQuantity(0) }}</template>
        <template #heading>Worker</template>
        Hire a worker.
        <template #cost>
            Cost: ${{ parseFloat(game.getCost(0).toFixed(1)) }}
            <br>
            Makes: ${{ parseFloat(game.getBaseIncome(0).toFixed(1)) }}/s
        </template>
    </ProductionItem>
    <ProductionItem :class="{enabled: game.money >= game.getCost(1) }" @click="game.buyItem(1)">
        <template #icon><IconStore /></template>
        <template #quantity>{{ game.getQuantity(1) }}</template>
        <template #heading>Store</template>
        Buy a store.
        <template #cost>
            Cost: ${{ parseFloat(game.getCost(1).toFixed(1)) }}
            <br>
            Makes: ${{ parseFloat(game.getBaseIncome(1).toFixed(1)) }}/s
        </template>
    </ProductionItem>
    <ProductionItem :class="{enabled: game.money >= game.getCost(2) }" @click="game.buyItem(2)">
        <template #icon><IconBusiness /></template>
        <template #quantity>{{ game.getQuantity(2) }}</template>
        <template #heading>Business</template>
        Start a business.
        <template #cost>
            Cost: ${{ parseFloat(game.getCost(2).toFixed(1)) }}
            <br>
            Makes: ${{ parseFloat(game.getBaseIncome(2).toFixed(1)) }}/s
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
    methods: {
        isEnabled(i) {
            return game.money >= game.getCost(0);
        }
    }
}
</script>