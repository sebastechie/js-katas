//How do you check if two strings are anagrams of each other?



 const anagramCheck = (string1, string2) => {
    let resultOne = string1.split('').sort().join();
    console.log(resultOne);
    let resultTwo = string2.split('').sort().join();
    console.log(resultTwo);
        return (resultOne === resultTwo) 
}

console.log(anagramCheck('bats', 'tabs'));
