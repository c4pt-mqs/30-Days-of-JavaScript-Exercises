// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(paragraph, n) {
    paragraph = paragraph.replace(/[^\w\s]|_/g, '').toLowerCase();
    const words = paragraph.split(/\s+/);
  
    const frequent = {};
    words.forEach(word => {
      if (frequent[word]) {
        frequent[word]++;
      } else {
        frequent[word] = 1;
      }
    });
  
    const wordCounts = Object.keys(frequent).map(word => {
      return { word, count: frequent[word] };
    });
  
    wordCounts.sort((a, b) => {
      if (a.count !== b.count) {
        return b.count - a.count;
      } else {
        return a.word.localeCompare(b.word);
      }
    });
    return wordCounts.slice(0, n);
  }
console.log(tenMostFrequentWords(paragraph, 7))


// Alternative:
const words = paragraph.toLowerCase().split(".").join("").split(" ")

function getTotal(words) {
  let data = []

  words.forEach((word) => {
    const sameWords = words.filter((w) => w === word)
    const otherWords = words.filter((w) => w !== word)
    if (sameWords.length > 1) {
      data.push({ count: sameWords.length, word })
      words = otherWords
    }
  })

  return data
}

function getMost(array) {
  let numbers = []
  array.forEach((item) => {
    numbers = [...numbers, item.count]
  })

  return array.find((i) => i.count === Math.max(...numbers))
}
console.log(getMost(getTotal(words)))
