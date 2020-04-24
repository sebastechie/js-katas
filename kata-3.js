//How do you find duplicate numbers in an array if it contains multiple duplicates?


const array = [4, 1, 2, 90, 5, 12, 56];

array.sort((a, b) => a - b);
console.log(array);

let duplicateNumber = [];
for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i - 1] === 0) {
        duplicateNumber.push(array[i]);
        console.log(duplicateNumber);
    }
}