var createHelloWorld = function() {
    
    return function(...args) {
        return console.log("hello world")
        
    }
};


  const f = createHelloWorld();
  f(); // "Hello World"
 