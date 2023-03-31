import {Production} from "./production.js";
import {Upgrades} from "./upgrades.js";
import {Developments} from "./development.js"
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
    totalTicks = 0;
    knowledge = 0;
    production = new Production();
    upgrades = [false, false, false, false];
    developments = [0, 0, 0];

    constructor(game) {
        if (!game) {
            this.money = 0;
            this.incomePerSecond = 0;
            this.stage = 1;
            return;
        }

        this.money = game.money;
        this.highestMoney = game.money;
        this.incomePerSecond = game.incomePerSecond;
        this.clickMultiplier = game.clickMultiplier;
        this.stage = game.stage;
        this.clickIPS = game.clickIPS;
        this.knowledge = game.knowledge;
        this.developments = game.developments;
        this._lastUpdate = new Date().getTime() / 1000;
        this._lastSaved = new Date().getTime() / 1000;
        this._tickInterval = setInterval(() => this.update(), this.TICK_DURATION * 1000);
        this.production = new Production(game.production);
        this.upgrades = game.upgrades;
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
        this.highestMoney = Math.max(this.money, this.highestMoney);
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