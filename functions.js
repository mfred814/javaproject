// String manipulation functions

function reverseString(text) {
  return text.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

function countCharacters(text) {
  return text.length;
}

console.log(countCharacters("hello")); // 5

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(function (word) {
      if (word.length === 0) {
        return word;
      }

      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(capitalizeWords("hello world")); // "Hello World"

// Array functions

function findMaximum(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let maximum = numbers[0];
  for (const number of numbers) {
    if (number > maximum) {
      maximum = number;
    }
  }

  return maximum;
}

console.log(findMaximum([3, 9, 2, 7])); // 9

function findMinimum(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let minimum = numbers[0];
  for (const number of numbers) {
    if (number < minimum) {
      minimum = number;
    }
  }

  return minimum;
}

console.log(findMinimum([3, 9, 2, 7])); // 2

function sumArray(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(sumArray([3, 9, 2, 7])); // 21

function filterArray(items, condition) {
  return items.filter(condition);
}

console.log(
  filterArray([1, 2, 3, 4, 5], function (number) {
    return number > 3;
  })
); // [4, 5]

// Mathematical functions

function factorial(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new RangeError("Factorial requires a non-negative integer.");
  }

  let result = 1;
  for (let current = 2; current <= number; current++) {
    result *= current;
  }

  return result;
}

console.log(factorial(5)); // 120

function isPrime(number) {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= number; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(8)); // false

function fibonacciSequence(terms) {
  if (!Number.isInteger(terms) || terms < 0) {
    throw new RangeError("The number of terms must be a non-negative integer.");
  }

  const sequence = [];
  let first = 0;
  let second = 1;

  // Each term is the sum of the two terms before it: 0, 1, 1, 2, 3, ...
  for (let index = 0; index < terms; index++) {
    sequence.push(first);
    const next = first + second;
    first = second;
    second = next;
  }

  return sequence;
}

console.log(fibonacciSequence(7)); // [0, 1, 1, 2, 3, 5, 8]
