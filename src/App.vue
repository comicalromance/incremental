<script setup>
import Stage0 from './components/Stage0.vue'
import Stage1 from './components/Stage1.vue'
import Stage2 from './components/Stage2.vue'
import Stage3 from './components/Stage3.vue'
import Stage4 from './components/Stage4.vue'
import Stage5 from './components/Stage5.vue'
import Stage6 from './components/Stage6.vue'
</script>

<template>
  <header>
  </header>

  <main>
    <div class="wrapper">
      <Stage0 v-if="game.stage == 0"/>
      <Stage1 v-if="game.stage == 1"/>
      <Stage2 v-if="game.stage == 2"/>
      <Stage3 v-if="game.stage == 3"/>
      <Stage4 v-if="game.stage == 4"/>
      <Stage5 v-if="game.stage == 5"/>
      <Stage6 v-if="game.stage == 6"/>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /*padding-right: calc(var(--section-gap) / 2);*/
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script>
export default {
    data() {
        return {
          game: game,
        }
    },
    created() {
      setInterval(() => {
        this.game.money++;
        this.game.money--;
        this.game.stage++;
        this.game.stage--;
      }, 100);
    }
}
</script>