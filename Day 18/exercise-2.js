const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// 1. Print out all the cat names in to catNames variable.
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(nameCat => {
        const name = nameCat.name;
        console.log(`Name: ${name}`)
    });
  })
  .catch(error => console.error(error))
