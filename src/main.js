import localforage from 'localforage'
import ElementPlus from 'element-plus'
import { createApp} from 'vue'
import App from './App.vue'

import 'element-plus/dist/index.css'
import './assets/main.css'
import {Game} from './game.js'

function startApp() {
    const app = createApp(App);
    app.use(ElementPlus);
    app.mount("#app");
}

localforage.getItem('savedgame').then((savedgame) => {
    if (savedgame != null) {
        console.log(savedgame);
        window.game = new Game(savedgame);
    } else {
        window.game = new Game().start();
    }
    startApp();
}).catch((err) => {
    console.log(err);
    window.game = new Game().start();
    startApp();
})



//window.game = new Game().start();
//const app = createApp(App);
//app.config.globalProperties.$game = ref(new Game().start());
//app.mount('#app')
//createApp(App).mount('#app');
