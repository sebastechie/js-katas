//How do you check if a string contains only digits?



const digitsString = (string) => {
    if(string.match(/^[0-9]+$/) !== null) {
        return true;
    } else {
        return false;
    }
}

console.log(digitsString("8621987"));