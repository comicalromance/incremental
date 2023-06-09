export class Production {
    globalMultiplier = 1;
    costMultiplier = 1;
    productionList = [];

    constructor(production) {
        if (!production) {
            this.productionList.push(new Item(30, 1));
            this.productionList.push(new Item(60, 2));
            this.productionList.push(new Item(150, 5));
            return;
        }
        production.productionList.forEach((item) => {
            this.productionList.push(new Item(0, 0, item))
        });
        this.globalMultiplier = production.globalMultiplier || 1;
        this.costMultiplier = production.costMultiplier || 1;
    }

    getCost(i) {
        return this.productionList[i].getCost() * this.costMultiplier; 
    }

    getBaseIncome(i) {
        return this.productionList[i].getBaseIncome() * this.globalMultiplier;
    }

    changeCostMultiplier(newMultiplier) {
        this.productionList.forEach((item) => item.changeCostMultiplier(newMultiplier));
    }

    buyItem(i) {
        this.productionList[i].quantity++;
        this.productionList[i].updateCost();
    }

    getQuantity(i) {
        return this.productionList[i].getQuantity();
    }

    calculateIncome() {
        let sum = 0;
        this.productionList.forEach((item) => sum += item.getIncome());
        return sum * this.globalMultiplier;
    }
}

class Item {
    currentCost = 0;
    baseCost = 0;
    baseIncome = 0;
    quantity = 0;
    costMultiplier = 1.1;
    incomeMultiplier = 1;

    constructor(baseCost, income, item) {
        if (!item) {
            this.currentCost = baseCost;
            this.baseCost = baseCost;
            this.baseIncome = income;
            return;
        }
        this.currentCost = item.currentCost;
        this.baseCost = item.baseCost;
        this.baseIncome = item.baseIncome;
        this.quantity = item.quantity;
        this.costMultiplier = item.costMultiplier;
        this.incomeMultiplier = item.incomeMultiplier;
    }

    updateCost() {
        this.currentCost *= this.costMultiplier;
        this.currentCost = Math.floor(this.currentCost);
    }

    changeCostMultiplier(newMultiplier) {
        this.costMultiplier = newMultiplier;
        this.currentCost = this.baseCost * Math.pow(this.costMultiplier, this.quantity);
    }

    getCost() {
        return this.currentCost;
    }

    getBaseIncome() {
        return this.baseIncome * this.incomeMultiplier;
    }

    getIncome() {
        return this.baseIncome * this.quantity * this.incomeMultiplier;
    }

    getQuantity() {
        return this.quantity;
    }
}