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
            game.production.globalMultiplier *= 1.5;
        }), 
        new Development((quantity) => quantity + 1, (game) => {
            game.clickMultiplier *= 1.5;
        }),
        new Development((quantity) => quantity + 1, (game) => {
            game.production.costMultiplier *= 0.8;
        }),
    ];

    static getCost(i, quantity) {
        return this.developmentList[i].getCost(quantity); 
    }

    static buyDevelopment(i) {
        return this.developmentList[i].getEffect();
    }
}

