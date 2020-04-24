//How do you find the largest and smallest number in an unsorted integer array?



const numnberArray = [5, 21, 8, 67, 1, 99];
let sortedArray = numArray.slice().sort();
const largestNumber = sortedArray[sortedArray.length - 1];
const smallestNumber = sortedArray[0];

console.log(smallestNumber);
console.log(largestNumber);
