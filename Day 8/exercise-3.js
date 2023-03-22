// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: 'John',
  lastName: 'Martin',
  incomes: [],
  expenses: [],
  totalIncome() {
    let total = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      total += this.incomes[i].amount;
    }
    return total;
  },
  totalExpense() {
    let total = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      total += this.expenses[i].amount;
    }
    return total;
  },
  accountInfo() {
    return `Name: ${this.firstName} ${this.lastName}\nIncome: ${this.totalIncome()}\nExpense: ${this.totalExpense()}`;
  },
  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
};

/*  */

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// 1. Imagine you are getting the above users collection from a MongoDB database. 

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(newUser) {
  const userExists = users.some(user => user.email === newUser.email);
  if (userExists) {
    console.log('You already have an account!');
  } else {
    users.push(newUser);
    console.log('Sign up successful!');
  }
}
const newUser = {
  _id: 'aabbcc',
  username: 'John',
  email: 'john@mail.com',
  password: 'p@ssw0rld',
  createdAt: '08/02/2020 9:00 AM',
  isLoggedIn: false
};

signUp(newUser);
console.log(users);

// b. Create a function called signIn which allows user to sign in to the application
function signIn(username, password) {
  let userExists = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      users[i].isLoggedIn = true;
      console.log("Login successful");
      userExists = true;
      break;
    }
  }
  if (!userExists) {
    console.log("Invalid login credentials");
  }
}

signIn("Asab", "123456")

// 2. The products array has three elements and each of them has six properties. 

// a. Create a function called rateProduct which rates the product 
function rateProduct(productId, userId, rating) {
  let productIndex = products.findIndex(product => product._id === productId);
  if (productIndex !== -1) {
    let product = products[productIndex];
    let userRatingIndex = product.ratings.findIndex(rating => rating.userId === userId);
    if (userRatingIndex === -1) {
      product.ratings.push({ userId, rate: rating });
    } else {
      product.ratings[userRatingIndex].rate = rating;
    }
    return product;
  }
}
let ratedProduct = rateProduct('aegfal', 'ab12ex', 4.5);
console.log(ratedProduct);

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
  const product = products.find(p => p._id === productId);
  if (!product || product.ratings.length === 0) {
    return null;
  }
  const sum = product.ratings.reduce((acc, rating) => acc + rating.rate, 0);
  return sum / product.ratings.length;
}

// 3. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId) {
  let productIndex = -1;
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      productIndex = i;
      break;
    }
  }
  if (productIndex === -1) {
    console.log("Product not found");
    return;
  }
  
  const product = products[productIndex];
  const userLikedIndex = product.likes.indexOf(userId);
  if (userLikedIndex !== -1) {
    product.likes.splice(userLikedIndex, 1);
    console.log("Product like removed successfully");
  } else {
    product.likes.push(userId);
    console.log("Product liked successfully");
  }
}
likeProduct("eedfcf", "fg12cy");
