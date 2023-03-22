// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount(firstName, lastName) {
    const incomes = [];
    const expenses = [];
  
    function totalIncome() {
      let sum = 0;
      for (let income of incomes) {
        sum += income.amount;
      }
      return sum;
    }
  
    function totalExpense() {
      let sum = 0;
      for (let expense of expenses) {
        sum += expense.amount;
      }
      return sum;
    }
  
    function accountInfo() {
      return `${firstName} ${lastName}\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}`;
    }
  
    function addIncome(description, amount) {
      incomes.push({description, amount});
    }
  
    function addExpense(description, amount) {
      expenses.push({description, amount});
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      accountInfo,
      addIncome,
      addExpense,
      accountBalance
    };
  }

const myAccount = personAccount('John', 'Martin');
myAccount.addIncome('Salary', 3000);
myAccount.addIncome('Bonus', 500);
myAccount.addExpense('Rent', 1500);
myAccount.addExpense('Groceries', 200);

console.log(myAccount.accountInfo());
console.log(myAccount.accountBalance());
