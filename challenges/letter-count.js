/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
var word = ['apple'];
var characters = [];

word.forEach(function(element) {
  characters.push(element.split(''));
  // .(split(''));
  console.log(characters);
  console.log(characters.length);

  // add the first letter to an array, give it a index of 1
  // check the second letter to see if it matches the first
  // if it matches, add 1 to value
  // if it doesn't match, add new key and a value of 1
  // check the third letter to see if it mattches 1 or 2

})


// var a = ['a', 'b', 'c'];
//
// a.forEach(function(element) {
//     console.log(element);
// });
