// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
    firstname: '',
    lastname: '',
    incomes: [],
    expenses: [],
    totalIncome: function() {
      let sum = 0;
      for (let i = 0; i < this.incomes.length; i++) {
        sum += this.incomes[i].amount;
      }
      return sum;
    },
    totalExpense: function() {
      let sum = 0;
      for (let i = 0; i < this.expenses.length; i++) {
        sum += this.expenses[i].amount;
      }
      return sum;
    },
    accountInfo: function() {
      return `Account Information\nName: ${this.firstname} ${this.lastname}\nIncome: ${this.totalIncome()}\nExpense: ${this.totalExpense()}`;
    },
    addIncome: function(description, amount) {
      this.incomes.push({description, amount});
    },
    addExpense: function(description, amount) {
      this.expenses.push({description, amount});
    },
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  