import {Production} from "./production.js"
import localforage from "localforage";

export class Game {

    _tickInterval = null;
    TICK_DURATION = 0.1;
    gameSpeed = 1;
    money = 0;
    incomePerSecond = 0;
    clickMultiplier = 1;
    stage = 0;
    _lastUpdate = 0;
    _lastSaved = 0;
    totalTicks = 0;
    production = new Production();

    constructor(game) {
        if (!game) {
            this.money = 0;
            this.incomePerSecond = 0;
            this.stage = 1;
            return;
        }
        this.money = game.money;
        this.incomePerSecond = game.incomePerSecond;
        this.clickMultiplier = game.clickMultiplier;
        this.stage = game.stage;
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
    }

    update() {
        let now = new Date().getTime() / 1000;
        let timeDiff = Math.max(0, now - this._lastUpdate);
        this.money += timeDiff * this.incomePerSecond;
        this._lastUpdate = now;

        let saveDiff = Math.max(0, now - this._lastSaved);
        if (saveDiff > 10) {
            console.log("saved");
            this._lastSaved = now;
            localforage.setItem('savedgame', this);
        }
    }

    clickMoney() {
        this.money += this.clickMultiplier;
    }

    getCost(i) {
        return this.production.getCost(i);
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
}