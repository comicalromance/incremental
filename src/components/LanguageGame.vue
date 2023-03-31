<script setup>
import MiniGame from './MiniGame.vue';
</script>

<template>
    <MiniGame>
        <h3>Language Game</h3>
        <el-alert class="alert" v-if="showAlert" :title="alertMessage" :type="alertType" :closable="false"/>
        <br/>
        <div v-html="questionString"></div>
        <div class="margin">
            <el-radio-group v-model="chosen" class="vertical-radio">
                <template v-for="option in options">
                    <el-radio :label="option" size="large"><span v-html="option"></span></el-radio>
                </template>
                <el-button @click="submitAns()">Submit</el-button>
            </el-radio-group>
        </div>
    </MiniGame>
</template>

<style>
.vertical-radio {
    display: block !important;   
}

.el-radio {
    display: block !important;
    margin: 0 !important;
}
</style>

<style scoped>
.inputField {
    width: 80%;
}

.margin {
    text-align: left;
    margin-left: 2rem;
    margin-top: 0.5rem;
}
.alert{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}

</style>
<script>
export default {
    data() {
        return {
            game: game,
            options: [],
            question: "",
            questionString: "",
            chosen: "",
            answer: "",
            showAlert: false,
            alertType: "success",
            alertMessage: "",
        }
    },
    methods: {
        getRandomTranslation() {
            let question = game.getRandomTranslation();
            this.question = question[0];
            this.questionString = "What is '" + question[0] + "' in German?";
            this.answer = question[1];
            this.options = [];
            for (var i = 0; i < 3; i++) {
                question = game.getRandomTranslation();
                if (question[1] != this.answer) {
                    this.options.push(question[1]); 
                } else {
                    i--;
                }
            }
            this.options.splice(Math.floor(Math.random() * (this.options.length + 1)), 0, this.answer);
        },
        submitAns() {
            if (this.chosen == this.answer) {
                this.alertType = "success";
                this.alertMessage = "Correct! You have earnt 1 Knowledge!";
                this.game.knowledge += 1 * this.game.knowledgeMultiplier;
                this.game.languageWin++;
            } else {
                this.alertType = "warning";
                this.alertMessage = "Wrong! The correct translation of " + this.question + " is " + this.answer + "!";
            }
            this.game.languagePlayed++;
            this.chosen = "";
            this.showAlert = true;
            this.getRandomTranslation();
        }
    },
    mounted() {
        this.getRandomTranslation();
    }
}
</script>

