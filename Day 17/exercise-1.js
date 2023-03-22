// window.localStorage - stores data with no expiration date
// window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)Most modern browsers support Web Storage, however it is good to check browser support for localStorage and sessionStorage. Let us see the available methods for the Web Storage objects.

// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to storage data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.


// 1. Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'John');
localStorage.setItem('lastName', 'Martin');
localStorage.setItem('age', 25);
localStorage.setItem('country', 'United States');
localStorage.setItem('city', 'New York');

