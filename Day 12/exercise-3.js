// Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?"
function cleanText(sentence) {
    sentence = sentence.replace(/[^\w\s]|_/g, '');
    return sentence
}
console.log(cleanText(sentence))

// Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
function mostFrequentWords(cleanedText) {
  cleanedText = cleanText(cleanedText);
  const words = cleanedText.split(' ');
  const frequency = {};
  words.forEach(word => {
    frequency[word] = frequency[word] || 0;
    frequency[word]++;
  });
  const sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
  const topThree = sortedFrequency.slice(0, 3).map(entry => ({ word: entry[0], count: entry[1] }));
  return topThree;
}
console.log(mostFrequentWords(sentence));
