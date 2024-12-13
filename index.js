// 1. receivesAFunction - takes a callback and calls it
function receivesAFunction(callback) {
    callback(); 
  }
  
  // 2. returnsANamedFunction - returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function!");
    };
  }
  
  // 3. returnsAnAnonymousFunction - returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("This is an anonymous function!");
    };
  }
  
  // Example usage:
  
  // Using receivesAFunction:
  receivesAFunction(() => console.log("Callback function called!")); // Should log "Callback function called!"
  
  // Using returnsANamedFunction:
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Should log "This is a named function!"
  
  // Using returnsAnAnonymousFunction:
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc(); // Should log "This is an anonymous function!"
  