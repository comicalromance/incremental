<script setup>
import Modal from "./Modal.vue"
</script>

<template>
    <div class="main">
        <Modal>
            <h1>Foreword - Game vs Gamification</h1>
            <br/>
            <p class="justify">
                Duolingo. Coursemology. Fitbit. These apps are prominent examples of gamification: applying certain aspects of digital games 
                in various fields to increase participation and data collection. What seems like innocous fun instead disguses itself as a
                tool of control.
            </p>
            <p class="center">
                <i>“Gamification creates only the semblance of play, trivialising games as a means to control 
                    <br/> rather than treating play as a serious and valuable end in itself.” - 
                    <a href="https://ojs.library.queensu.ca/index.php/surveillance-and-society/article/view/13204">Garfield, 2019</a></i>
            </p>
            <p class="justify">
                Indeed, the game in gamification is often but a facade: individuals accomplish tasks not out of fun, but an artifically
                injected compulsion driven by disciplinary and societal systems of control. Entites hoard data & manipulate desire to 
                drive participation in activites that users may find unengaging or uninteresting, sometimes leading to the greater
                good of society, but other times leading only to personal gain.
                <br/><br/>
                In this short experiment, we shall examine how systems of control may be employed to engage the deliberately banal task of 
                clicking a button. 
            </p>
            <div class="click" @click="game.nextStage()">
                Proceed
            </div>
        </Modal>
    </div>
</template>

<style scoped>

.progress {
    line-height: 3rem;
}

.justify {
    text-align: justify;
}

.center {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

#head {
    text-align: center;
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