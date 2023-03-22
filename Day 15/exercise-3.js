// 1. Let’s try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((a, b) => a + b, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middleIndex = Math.floor(this.count() / 2);
      if (this.count() % 2 === 0) {
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
      } else {
        return sortedData[middleIndex];
      }
    }
  
    mode() {
      const freqMap = {};
      let maxFreq = 0;
      let mode = null;
      for (const value of this.data) {
        if (freqMap[value]) {
          freqMap[value]++;
        } else {
          freqMap[value] = 1;
        }
        if (freqMap[value] > maxFreq) {
          maxFreq = freqMap[value];
          mode = value;
        }
      }
      return { mode, count: maxFreq };
    }
  
    var() {
      const mean = this.mean();
      return this.data.reduce((acc, value) => acc + (value - mean) ** 2, 0) / (this.count() - 1);
    }
  
    std() {
      return Math.sqrt(this.var());
    }
  
    percentile(p) {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const index = (p / 100) * (this.count() - 1);
      if (Number.isInteger(index)) {
        return sortedData[index];
      } else {
        const lowerIndex = Math.floor(index);
        const upperIndex = Math.ceil(index);
        return (sortedData[lowerIndex] + sortedData[upperIndex]) / 2;
      }
    }
  
    freqDist() {
      const freqMap = {};
      for (const value of this.data) {
        if (freqMap[value]) {
          freqMap[value]++;
        } else {
          freqMap[value] = 1;
        }
      }
      return Object.entries(freqMap).map(([value, count]) => [count / this.count() * 100, Number(value)]);
    }
  
    describe() {
      return {
        count: this.count(),
        sum: this.sum(),
        min: this.min(),
        max: this.max(),
        range: this.range(),
        mean: this.mean(),
        median: this.median(),
        mode: this.mode(),
        var: this.var(),
        std: this.std(),
        freqDist: this.freqDist()
      };
    }
  }
  

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
  

statistics.count();
console.log('Sum:', statistics.sum());
console.log('Min:', statistics.min());
console.log('Max:', statistics.max());
console.log('Range:', statistics.range());
console.log('Mean:', statistics.mean());
console.log('Median:', statistics.median());
console.log('Mode:', statistics.mode());
console.log('Variance:', statistics.var());
console.log('Standard Deviation:', statistics.std());
console.log('25th Percentile:', statistics.percentile(25));
console.log('75th Percentile:', statistics.percentile(75));
console.log('Frequency Distribution:', statistics.freqDist());
console.log('Descriptive Statistics:', statistics.describe());

// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.incomes = new Map();
      this.expenses = new Map();
    }
  
    addIncome(description, amount) {
      if (amount <= 0) {
        throw new Error('Income amount must be positive');
      }
      this.incomes.set(description, amount);
    }
  
    addExpense(description, amount) {
      if (amount <= 0) {
        throw new Error('Expense amount must be positive');
      }
      this.expenses.set(description, amount);
    }
  
    totalIncome() {
      let sum = 0;
      for (const amount of this.incomes.values()) {
        sum += amount;
      }
      return sum;
    }
  
    totalExpense() {
      let sum = 0;
      for (const amount of this.expenses.values()) {
        sum += amount;
      }
      return sum;
    }
  
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  
    accountInfo() {
      return `${this.firstName} ${this.lastName} has a balance of ${this.accountBalance()}`;
    }
}

const person = new PersonAccount('John', 'Martin');

person.addIncome('Salary', 3000);
person.addIncome('Bonus', 500);
person.addExpense('Rent', 1200);
person.addExpense('Utilities', 200);
person.addExpense('Food', 400);

console.log(person.accountInfo());
console.log(person.totalIncome());
console.log(person.totalExpense());
console.log(person.accountBalance());
