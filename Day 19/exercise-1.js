// 1. Create a closure which has one inner function
function outerFunction() {
    const message = 'Hello World!';
    function innerFunction() {
      console.log(message);
    }
    return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction();
  