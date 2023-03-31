<script setup>
import AchievementItem from "./AchievementItem.vue";
import IconCursorSolid from "./icons/IconCursorSolid.vue";
import IconCursor from "./icons/IconCursor.vue";
import IconDocumentation from "./icons/IconDocumentation.vue";
import IconMath from "./icons/IconMath.vue";
import IconLanguage from "./icons/IconLanguage.vue";
</script>

<template>
    <div class="leftmargin">
        <h3> Achievements </h3>
        <div class="leftalign">
            <el-space wrap :size="16">
                <AchievementItem :class="{enabled: game.achievements[0]}">
                    <template #title>Clicking Frenzy</template>
                    <template #requirement>{{game.totalClicks}}/100 Clicks</template>
                    <template #description>Multiplies clicking power by 2.</template>
                    <template #icon><IconCursor/></template>
                </AchievementItem>
                <AchievementItem :class="{enabled: game.achievements[1]}">
                    <template #title>Clicking Bonzana</template>
                    <template #requirement>{{game.totalClicks}}/500 Clicks</template>
                    <template #description>Multiplies clicking power by 4.</template>
                    <template #icon><IconCursorSolid/></template>
                </AchievementItem>
                <AchievementItem :class="{enabled: game.achievements[2]}">
                    <template #title>Trivia Whiz</template>
                    <template #requirement>{{game.triviaWin}}/25 Trivia Wins</template>
                    <template #description>Multiplies global production by 3.</template>
                    <template #icon><IconDocumentation/></template>
                </AchievementItem>
                <AchievementItem :class="{enabled: game.achievements[3]}">
                    <template #title>Polyglot</template>
                    <template #requirement>{{game.languageWin}}/25 Language Wins</template>
                    <template #description>Decreases production cost multiplier to 1.05</template>
                    <template #icon><IconLanguage/></template>
                </AchievementItem>
                <AchievementItem :class="{enabled: game.achievements[4]}">
                    <template #title>Math Master</template>
                    <template #requirement>{{game.mathWin}}/25 Math Wins</template>
                    <template #description>Increases knowledge gain by 5.</template>
                    <template #icon><IconMath/></template>
                </AchievementItem>

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
    created() {
      setInterval(() => {
        this.game.achievements[0] = !this.game.achievements[0];
        this.game.achievements[0] = !this.game.achievements[0];
      }, 1000);
    }
}
</script>