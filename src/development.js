class Development {
    cost = null;
    effect = null;

    constructor(cost, effect) {
        this.cost = cost;
        this.effect = effect;
    }

    getEffect() {
        return this.effect;
    }

    getCost(quantity) {
        return this.cost(quantity);
    }

}

export class Developments {
    static developmentList = [
        new Development((quantity) => quantity + 1, (game) => {
            game.production.globalMultiplier *= 1.1;
        }), 
        new Development((quantity) => quantity + 1, (game) => {
            game.production.productionList[1].incomeMultiplier *= 2;
        }),
        new Development((quantity) => quantity + 1, (game) => {
            game.production.productionList[2].incomeMultiplier *= 2;
        }),
    ];

    static getCost(i, quantity) {
        return this.developmentList[i].getCost(quantity); 
    }

    static buyDevelopment(i) {
        return this.developmentList[i].getEffect();
    }
}

