// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((p, index) => {
  p.style.color = 'blue';
  p.style.backgroundColor = 'green';
  p.style.border = '1px solid black';
  p.style.fontSize = '16px';
  p.style.fontFamily = 'Arial';
});


// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
const paragraph1 = document.querySelectorAll('p');
paragraph1.forEach((p, index) => {
  if (index % 2 === 0) {
    p.style.color = 'green';
  } else {
    p.style.color = 'red';
  }
});


// 3. Set text content, id and class to each paragraph
const paragraph2 = document.querySelectorAll('p');
paragraph2.forEach((p, index) => {
  p.textContent = `This is paragraph ${index+1}.`;
  p.id = `paragraph-${index+1}`;
  p.classList.add(`paragraph-class-${index+1}`);
});

