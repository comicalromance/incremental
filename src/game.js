import {Production} from "./production.js";
import {Upgrades} from "./upgrades.js";
import {Developments} from "./development.js"
import {Trivia} from "./trivia.js"
import {Language} from "./language.js"
import {Achievements} from "./achievements.js";
import localforage from "localforage";

export class Game {

    _tickInterval = null;
    TICK_DURATION = 0.1;
    gameSpeed = 1;
    highestMoney = 0;
    money = 0;
    incomePerSecond = 0;
    clickMultiplier = 1;
    clickIPS = 0;
    stage = 0;
    _lastUpdate = 0;
    _lastSaved = 0;
    startTime = 0;
    totalTicks = 0;
    knowledge = 0;
    knowledgeMultiplier = 1;
    production = new Production();
    upgrades = [false, false, false, false];
    achievementsEnabled = false;
    achievements = [false, false, false, false, false];
    developments = [0, 0, 0];
    totalClicks = 0;

    constructor(game) {
        if (!game) {
            this.money = 0;
            this.incomePerSecond = 0;
            this.stage = 0;
            this.startTime = new Date().getTime() / 1000;
            return;
        }

        this.money = game.money || 0;
        this.highestMoney = game.highestMoney || 0;
        this.incomePerSecond = game.incomePerSecond || 0;
        this.clickMultiplier = game.clickMultiplier || 1;
        this.stage = game.stage || 0;
        this.clickIPS = game.clickIPS || 0;
        this.knowledge = game.knowledge || 0;
        this.developments = game.developments || [0, 0, 0];
        this.upgrades = game.upgrades || [false, false, false, false];
        this.achievementsEnabled = game.achievementsEnabled || false;
        this.achievements = game.achievements || [false, false, false, false, false];
        this.totalClicks = game.totalClicks || 0;
        this.mathPlayed = game.mathPlayed || 0;
        this.mathWin = game.mathWin || 0;
        this.triviaPlayed = game.triviaPlayed || 0;
        this.triviaWin = game.triviaWin || 0;
        this.languagePlayed = game.languagePlayed || 0;
        this.languageWin = game.languageWin || 0;
        this.knowledgeMultiplier = game.knowledgeMultiplier || 1;
        this.startTime = game.startTime || new Date().getTime() / 1000;
        this._lastUpdate = new Date().getTime() / 1000;
        this._lastSaved = new Date().getTime() / 1000;
        this._tickInterval = setInterval(() => this.update(), this.TICK_DURATION * 1000);
        this.production = new Production(game.production);
    }

    start() {
        this._lastUpdate = new Date().getTime() / 1000;
        this._lastSaved = this._lastUpdate;
        this._tickInterval = setInterval(() => this.update(), this.TICK_DURATION * 1000);
        return this;
    }

    nextStage() {
        this.stage++;
        if (this.stage == 5) this.achievementsEnabled = true;
    }

    update() {
        let now = new Date().getTime() / 1000;
        let timeDiff = Math.max(0, now - this._lastUpdate);
        this.money += timeDiff * this.incomePerSecond;
        this.highestMoney = Math.max(this.money, this.highestMoney);

        for (var i = 0; i < this.achievements.length; i++) {
            if (this.achievements[i] || !this.achievementsEnabled) continue;
            if (Achievements.checkCondition(i)(this) == true) {
                console.log(i);
                this.achievements[i] = true;
                Achievements.getEffect(i)(this);
            }
        }

        this._lastUpdate = now;
        let saveDiff = Math.max(0, now - this._lastSaved);
        if (saveDiff > 10) {
            console.log("saved");
            this._lastSaved = now;
            localforage.setItem('savedgame', this);
        }
    }

    clickMoney() {
        this.money += (1 + this.incomePerSecond * this.clickIPS) * this.clickMultiplier;
        this.totalClicks++;
    }

    getCost(i) {
        return this.production.getCost(i);
    }

    getUpgradeCost(i) {
        return Upgrades.getCost(i);
    }

    getDevelopmentCost(i) {
        return Developments.getCost(i, this.developments[i]);
    }

    getRandomQuestion() {
        return Trivia.getRandomQuestion();
    }

    getRandomTranslation() {
        return Language.getRandomTranslation();
    }

    getBaseIncome(i) {
        return this.production.getBaseIncome(i);
    }

    getQuantity(i) {
        return this.production.getQuantity(i);
    }

    buyItem(i) {
        let cost = this.production.getCost(i);
        if (cost > this.money) return;
        else {
            this.production.buyItem(i);
            this.incomePerSecond = this.production.calculateIncome();
            this.money -= cost;
        }
    }

    resetGame() {
        localforage.setItem('savedgame', new Game());
    }

    buyUpgrade(i) {
        let cost = this.getUpgradeCost(i);
        if (cost > this.money || this.upgrades[i] == true) return;
        else {
            let eff = Upgrades.buyUpgrade(i);
            eff(this);
            this.incomePerSecond = this.production.calculateIncome();
            this.money -= cost;
            this.upgrades[i] = true;
        }
    }

    buyDevelopment(i) {
        let cost = this.getDevelopmentCost(i);
        if (cost > this.knowledge) return;
        else {
            let eff = Developments.buyDevelopment(i);
            eff(this);
            this.incomePerSecond = this.production.calculateIncome();
            this.knowledge -= cost;
            this.developments[i]++;
        }
    }
}