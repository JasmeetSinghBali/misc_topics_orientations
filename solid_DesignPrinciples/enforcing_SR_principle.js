import logBudgedOverflows from "./logger_SR.js"

class BudgetTracker{
    constructor(maxBudget){
        this.maxBudget = maxBudget
        this.currentWithdrawn = 0
    }

    trackBudget(moneySpent){
        this.currentWithdrawn += moneySpent
        if(this.currentWithdrawn > this.maxBudget){
            logBudgedOverflows('This weeks budget overflown... (SR_principle):(')
        }
    }
}

const budgetTracker = new BudgetTracker(1000);
budgetTracker.trackBudget(200)
budgetTracker.trackBudget(600)
budgetTracker.trackBudget(500)