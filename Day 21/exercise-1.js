// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
/* <!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
    <p>This is the third paragraph.</p>
    <p>This is the fourth paragraph.</p>

    <script>
      const firstParagraph = document.querySelector("p");
      console.log(firstParagraph.textContent);
    </script>
  </body>
</html> */


// 2. Get each of the the paragraph using document.querySelector(‘#id’) and by their id
/* <!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <p id="first-paragraph">This is the first paragraph.</p>
    <p id="second-paragraph">This is the second paragraph.</p>
    <p id="third-paragraph">This is the third paragraph.</p>
    <p id="fourth-paragraph">This is the fourth paragraph.</p>

    <script>
      const firstParagraphById = document.querySelector("#first-paragraph");
      console.log(firstParagraphById.textContent);

      const secondParagraphById = document.querySelector("#second-paragraph");
      console.log(secondParagraphById.textContent);

      const thirdParagraphById = document.querySelector("#third-paragraph");
      console.log(thirdParagraphById.textContent);

      const fourthParagraphById = document.querySelector("#fourth-paragraph");
      console.log(fourthParagraphById.textContent);
    </script>
  </body>
</html> */


// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
/* <!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
    <p>This is the third paragraph.</p>
    <p>This is the fourth paragraph.</p>

    <script>
      const paragraphsByTagName = document.querySelectorAll("p");
      console.log(paragraphsByTagName);
    </script>
  </body>
</html> */


// 4. Loop through the nodeList and get the text content of each paragraph
/* <!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
    <p>This is the third paragraph.</p>
    <p>This is the fourth paragraph.</p>

    <script>
      const paragraphsByTagName = document.querySelectorAll("p");

      for (let i = 0; i < paragraphsByTagName.length; i++) {
        console.log(paragraphsByTagName[i].textContent);
      }
    </script>
  </body>
</html> */


// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
/* <!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
    <p>This is the third paragraph.</p>
    <p>This is the fourth paragraph.</p>

    <script>
      const fourthParagraph = document.querySelector("p:nth-of-type(4)");
      fourthParagraph.textContent = "Fourth Paragraph";
    </script>
  </body>
</html> */


// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
/* <!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
    <p>This is the third paragraph.</p>
    <p>This is the fourth paragraph.</p>

    <script>
      const paragraphs = document.querySelectorAll("p");

      paragraphs.forEach((paragraph, index) => {
        paragraph.setAttribute("id", `paragraph-${index + 1}`);
      });

      paragraphs.forEach((paragraph) => {
        paragraph.setAttribute("class", "paragraph-class");
      });
    </script>
  </body>
</html> */
