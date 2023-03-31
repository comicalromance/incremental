class Achievement {
    condition = null;
    effect = null;

    constructor(condition, effect) {
        this.condition = condition;
        this.effect = effect;
    }

    checkCondition() {
        return this.condition;
    }

    getEffect() {
        return this.effect;
    }

}

export class Achievements {
    static achievementList = [
        new Achievement((game) => game.totalClicks >= 100, (game) => {
            game.clickMultiplier *= 2;
        }), 
        new Achievement((game) => game.totalClicks >= 500, (game) => {
            game.clickMultiplier *= 4;
        }),
        new Achievement((game) => game.triviaWin >= 25, (game) => {
            game.production.globalMultiplier *= 4;
        }),
        new Achievement((game) => game.languageWin >= 25, (game) => {
            game.production.changeCostMultiplier(1.05);
        }),
        new Achievement((game) => game.mathWin >= 25, (game) => {
            game.knowledgeMultiplier = 5;
        }),
    ];

    static checkCondition(i) {
        return this.achievementList[i].checkCondition(); 
    }

    static getEffect(i) {
        return this.achievementList[i].getEffect();
    }
}

