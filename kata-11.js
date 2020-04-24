//How do you check if a given string is a palindrome?



const palindromeCheck = (string) => {
    const reverseString = string.split('').reverse().join('');
    console.log(reverseString);
    return string.toLowerCase() === reverseString;
}

console.log(palindromeCheck('bus'));
