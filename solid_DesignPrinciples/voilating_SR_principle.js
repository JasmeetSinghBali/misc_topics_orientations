class BudgetTracker{
    constructor(maxBudget){
        this.maxBudget = maxBudget
        this.currentWithdrawn = 0
    }

    trackBudget(moneySpent){
        this.currentWithdrawn += moneySpent
        if(this.currentWithdrawn > this.maxBudget){
            this.logBudgedOverflows()
        }
    }

    logBudgedOverflows(){
        console.log('This week budget overflown....:(');
    }
}

const budgetTracker = new BudgetTracker(1000);
budgetTracker.trackBudget(200)
budgetTracker.trackBudget(600)
budgetTracker.trackBudget(500)