//How do you remove duplicates from an array in place?



const array = [1, 2, 4, 123, 123, 18];
const removeDupicates = () => {
    return [...new Set(array)];
}

console.log(removeDupicates());
