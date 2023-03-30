import localforage from 'localforage'
import { createApp, ref } from 'vue'
import App from './App.vue'

import './assets/main.css'
import {Game} from './game.js'


localforage.getItem('savedgame').then((savedgame) => {
    if (savedgame != null) {
        console.log(savedgame);
        window.game = new Game(savedgame);
    } else {
        window.game = new Game().start();
    }
    createApp(App).mount('#app');
}).catch((err) => {
    console.log(err);
    window.game = new Game().start();
    createApp(App).mount('#app');
})


//window.game = new Game().start();
//const app = createApp(App);
//app.config.globalProperties.$game = ref(new Game().start());
//app.mount('#app')
//createApp(App).mount('#app');
