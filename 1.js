//1

function averageOfEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);

  const sum = evenNumbers.reduce((acc, num) => acc + num, 0);

  const average = sum / evenNumbers.length;

  return average;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = averageOfEvenNumbers(numbers);
console.log(result); // Output should be 4 (average of 2, 4, 6, 8)

//2

function longestWord(words) {
  if (words.length === 0) {
    return null; // Gérer le cas d'un tableau vide
  }

  return words.reduce((longestWord, currentWord) => {
       if ( currentWord.length > longestWord.length ){
         longestWord = currentWord 
       }
  });
}
const wordsArray = ["apple", "banana", "cherry", "date", "fig"];
const longest = longestWord(wordsArray);
console.log(longest); 

//3

function averagePages(books) {
  if (books.length === 0) {
    return 0; 
  }

  const totalPages = books.map(book => book.pages).reduce((sum, pages) => sum + pages, 0);
// On commence par creer un nouveau vecteur en utilisant map ensuite on utilise 
//la fonction reduce  
  const average = totalPages / books.length;
//on commence le 

  return average;
}
const booksArray = [
  { title: "Book A", author: "Author A", pages: 300 },
  { title: "Book B", author: "Author B", pages: 250 },
  { title: "Book C", author: "Author C", pages: 400 }
];

const avgPages = averagePages(booksArray);
console.log(avgPages); // Output should be the average number of pages

//4

function stringFrequency(strings) {
  return strings.reduce((freqObj, string) => {
    if (freqObj[string]) {
      freqObj[string]++;
    } else {
      freqObj[string] = 1;
    }
    return freqObj;
  }, {});
}

//utilisation

let inputArray = ["hello", "world", "hello"];
let frequency = stringFrequency(inputArray);
console.log(frequency); // Output should be { hello: 2, world: 1 }

//5

function countPeopleByCity(people) {
  return people.reduce((cityCount, person) => {
    const { city } = person;
    if (city in cityCount) {
      cityCount[city]++;
    } else {
      cityCount[city] = 1;
    }
    return cityCount;
  }, {});
}

const people = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" }
];

const result = countPeopleByCity(people);
console.log(result);

