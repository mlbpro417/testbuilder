// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

   for (var prefix = 38; prefix <= 39; prefix++){
    var length = 14;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length) {
      return 'Diner\'s Club';
    }
  }
 
  for (var prefix = 34; prefix <= 37; prefix++){
    var length = 15;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'American Express';
    }
  }

  for (var length = 16; length <= 16; length++){
    var prefix = 4903;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 16; length <= 16; length++){
    var prefix = 4905;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 16; length <= 16; length++){
    var prefix = 4911;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 16; length <= 16; length++){
    var prefix = 4936;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 16; length <= 16; length++){
    var prefix = 564182;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 16; length <= 16; length++){
    var prefix = 633110;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 16; length <= 16; length++){
    var prefix = 6333;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 16; length <= 16; length++){
    var prefix = 6759;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 18; length <= 19; length++){
    var prefix = 4903;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 18; length <= 19; length++){
    var prefix = 4905;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }    

  for (var length = 18; length <= 19; length++){
    var prefix = 4911;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }    

  for (var length = 18; length <= 19; length++){
    var prefix = 4936;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 18; length <= 19; length++){
    var prefix = 564182;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }

  for (var length = 18; length <= 19; length++){
    var prefix = 633110;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  }   

  for (var length = 18; length <= 19; length++){
    var prefix = 6333;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  } 

  for (var length = 18; length <= 19; length++){
    var prefix = 6759;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Switch';
    }
  } 

  for (var length = 13; length <= 19; length++){
    var prefix = 4;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Visa';
    }
  }

  for (var prefix = 51; prefix <= 55; prefix++){
    var length = 16;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'MasterCard';
    }
  }

  for (var prefix = 6011; prefix <= 6011; prefix++){
    var length = 16;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Discover';
    }
  }

  for (var prefix = 644; prefix <= 649; prefix++){
    var length = 16;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Discover';
    }
  }

  for (var prefix = 65; prefix <= 65; prefix++){
    var length = 16;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Discover';
    }
  }

  for (var prefix = 6011; prefix <= 6011; prefix++){
    var length = 19;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Discover';
    }
  }

  for (var prefix = 644; prefix <= 649; prefix++){
    var length = 19;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Discover';
    }
  }

  for (var prefix = 65; prefix <= 65; prefix++){
    var length = 19;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Discover';
    }
  }

  for (var length = 12; length <= 19; length++){
    var prefix = 5018;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Maestro';
    }
  }

  for (var length = 12; length <= 19; length++){
    var prefix = 5020;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Maestro';
    }
  } 

  for (var length = 12; length <= 19; length++){
    var prefix = 5038;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Maestro';
    }
  } 

  for (var length = 12; length <= 19; length++){
    var prefix = 6304;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'Maestro';
    }
  } 

  for (var prefix = 622126; prefix <= 622925; prefix++){
    var length = 16;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  }

  for (var prefix = 622126; prefix <= 622925; prefix++){
    var length = 17;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  }

  for (var prefix = 622126; prefix <= 622925; prefix++){
    var length = 18;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  }

  for (var prefix = 622126; prefix <= 622925; prefix++){
    var length = 19;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  }

  for (var prefix = 624; prefix <= 626; prefix++){
    var length = 16;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  }

  for (var prefix = 624; prefix <= 626; prefix++){
    var length = 17;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  } 

  for (var prefix = 624; prefix <= 626; prefix++){
    var length = 18;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  } 

  for (var prefix = 624; prefix <= 626; prefix++){
    var length = 19;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  }

  for (var prefix = 6282; prefix <= 6288; prefix++){
    var length = 16;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  }

  for (var prefix = 6282; prefix <= 6288; prefix++){
    var length = 17;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  } 

  for (var prefix = 6282; prefix <= 6288; prefix++){
    var length = 18;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  } 

  for (var prefix = 6282; prefix <= 6288; prefix++){
    var length = 19;
    if (cardNumber.startsWith(prefix) && cardNumber.length === length){
      return 'China UnionPay';
    }
  }

  
};


