/**your api code in your application */
class Store{
    construction(paymentProcessor){
        this.paymentProcessor = paymentProcessor
    }

    purchaseBike(quantity){
        this.paymentProcessor.pay(this.user,200 * quantity)
    }

    purchaseHelmet(quantity){
        this.paymentProcessor.pay(this.user,15 * quantity)
    }
}

/**a wrapper for stripe */
class StripePaymentProcessor {
    constructor(user){
        this.stripe =  new Stripe(user)
    }
    pay(amountInDollars){
        this.stripe.makePayment(amountInDollars*100)
    }
}
/**a wrapper for gpay */
class GpayPaymentProcessor {
    constructor(user){
        this.user= user
        this.gpay =  new Gpay()
    }
    pay(amountInDollars){
        this.gpay.makePayment(this.user, amountInDollars)
    }
}

/**consider this an actual third party API code that they have at their servers */
class Stripe{
    constructor(user){
        this.user = user
    }

    makePayment(amountInCents){
        console.log(`${this.user} made payment of $${amountInCents/100} with Stripe`)
    }

}

/**consider this an actual third party API code that they have at their servers */
class Gpay {
    makePayment(user,amountInDollars){
        console.log(`${user} made payment of $${amountInDollars} with Gpay`)
    }
}

const store = new Store(new GpayPaymentProcessor('jacob'))
store.purchaseBike(2)
store.purchaseHelmet(2)