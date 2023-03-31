<script setup>
import MiniGame from './MiniGame.vue';
</script>

<template>
    <MiniGame>
        <h3>Math Game</h3>
        What is {{ question }}?
        <el-alert class="alert" v-if="showAlert" :title="alertMessage" :type="alertType" :closable="false"/>
        <div class="margin">
            <el-input v-model="input" class="inputField" placeholder="Please input" />
            <el-button @click="submitAns()">Submit</el-button>
        </div>
    </MiniGame>
</template>

<style scoped>
.inputField {
    width: 80%;
}

.margin {
    margin-top: 1rem;
}
.alert{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

</style>
<script>
export default {
    data() {
        return {
            game: game,
            input: "",
            question: "",
            answer: "",
            showAlert: false,
            alertType: "success",
            alertMessage: "",
        }
    },
    methods: {
        generateRandomMath() {
            let questionType = Math.floor(Math.random() * 4);
            switch(questionType) {
                case 0: // simple addition
                    var a = Math.floor(Math.random() * 100);
                    var b = Math.floor(Math.random() * 100);
                    this.question = a + " + " + b;
                    this.answer = a + b;
                    break;
                case 1:
                    var a = Math.floor(Math.random() * 100);
                    var b = Math.floor(Math.random() * 100);
                    this.question = a + " - " + b;
                    this.answer = a - b;
                    break;
                case 2:
                    var a = Math.floor(Math.random() * 21);
                    var b = Math.floor(Math.random() * 21);
                    this.question = a + " * " + b;
                    this.answer = a * b;
                    break;
                case 3:
                    var a = Math.floor(Math.random() * 20) + 1;
                    var b = Math.floor(Math.random() * 20) + 1;
                    let c = a * b;
                    this.question = c + " ÷ " + b;
                    this.answer = a;
                    break;
            }
        },
        submitAns() {
            if (this.input == this.answer) {
                this.alertType = "success";
                this.alertMessage = "Correct! You have earnt 1 Knowledge!";
                this.game.knowledge += 1 * this.game.knowledgeMultiplier;
                this.game.mathWin++;
            } else {
                this.alertType = "warning";
                this.alertMessage = "Wrong! The correct answer was " + this.answer + "!";
            }
            this.showAlert = true;
            this.input = "";
            this.game.mathPlayed++;
            this.generateRandomMath();
        }
    },
    mounted() {
        this.generateRandomMath();
    }
}
</script>

