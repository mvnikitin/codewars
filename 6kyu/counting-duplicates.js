// Count the number of Duplicates
//
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
// that occur more than once in the input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.
//     Example
//
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// my first solution
// function duplicateCount(text){
//     const frequency = (text.toLocaleLowerCase()).split('').reduce((acc, item) => {
//         acc[item] = (acc[item] || 0) + 1;
//         return acc;
//     }, {});
//     let count = 0;
//     for (const frequencyKey in frequency) {
//         if (frequency[frequencyKey] > 1) {
//             count++;
//         }
//     }
//     return count;
// }

// refactored
function duplicateCount(text) {
    return text.toLocaleLowerCase().split('').filter((value, index, array) => {
        // already appeared but not now && now is the last appear
        return array.indexOf(value) !== index && array.lastIndexOf(value) === index;
    }).length;
}

// const arr = [1, 2, 3, 3, 3]
// console.log(arr.lastIndexOf(3))

// console.log(duplicateCount("avcdea"));

export {duplicateCount};