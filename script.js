const account = {
    balance: 0,
    depositTransactions: [],
    withdrawTransactions: [],
    deposit(amount){
        if(amount > 0){
            this.balance += amount
            this.depositTransactions.push(amount)
        } else{
            return false
        }
    },
    withdraw(amount){
        if (amount <= this.balance) {
        this.balance -= amount;
        this.withdrawTransactions.push(amount)
    } else {
        alert("Не вистачає коштів на вашому рахунку")
        return false
    }
  },
  getBalance() {
    return this.balance
  },
  getDepositTranzaction() {
    return this.depositTransactions
  },
  getWithdrawTransactions() {
    return this.withdrawTransactions
  }
}
account.deposit(15000)
account.withdraw(12500)
account.deposit(27700)
account.withdraw(14900)
console.log("Баланс:", account.balance)
console.log("Історія Депозитів:", account.depositTransactions)
console.log("Історія Виводів:", account.withdrawTransactions)