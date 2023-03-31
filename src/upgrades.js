class Upgrade {
    cost = 0;
    effect = null;

    constructor(cost, effect) {
        this.cost = cost;
        this.effect = effect;
    }

    getEffect() {
        return this.effect;
    }

    getCost() {
        return this.cost;
    }

}

export class Upgrades {
    static upgradeList = [
        new Upgrade(3000, (game) => {
            game.production.productionList[0].incomeMultiplier *= 2;
        }), 
        new Upgrade(6000, (game) => {
            game.production.productionList[1].incomeMultiplier *= 2;
        }),
        new Upgrade(20000, (game) => {
            game.production.productionList[2].incomeMultiplier *= 2;
        }),
        new Upgrade(50000, (game) => {
            game.production.globalMultiplier *= 2;
        }),
        new Upgrade(100000, (game) => {
            game.clickIPS = 0.2;
        }),
        new Upgrade(250000, (game) => {
            game.clickMultiplier *= 2;
        }),
    ];

    static getCost(i) {
        return this.upgradeList[i].getCost(); 
    }

    static buyUpgrade(i) {
        return this.upgradeList[i].effect;
    }
}

