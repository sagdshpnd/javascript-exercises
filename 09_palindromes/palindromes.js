const palindromes = function (string) {
   //Declare a alphanumeric string
   const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
   //convert the string to lower case, split it into an array, and filter out non-alphanumeric characters
   const cleanedString  = string
                                .toLowerCase()
                                .split('')
                                .filter(character => alphanumeric.includes(character))
                                .join('');

    const reversedString = cleanedString.split('').reverse().join('');

    return reversedString === cleanedString
   
};

// Do not edit below this line
module.exports = palindromes;
