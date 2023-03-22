// 1. Create a closure which has three inner functions
function outerFunction() {
    const message = 'Hello World!';
  
    function innerFunction1() {
      console.log(message);
    }
  
    function innerFunction2() {
      console.log(message.toUpperCase());
    }
  
    function innerFunction3() {
      console.log(message.split('').reverse().join(''));
    }
  
    return [innerFunction1, innerFunction2, innerFunction3];
}

const [myInnerFunction1, myInnerFunction2, myInnerFunction3] = outerFunction();

myInnerFunction1();
myInnerFunction2();
myInnerFunction3();
  