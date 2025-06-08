// The goal of this exercise is to convert a string to a new string where each character in the new string
// is "(" if that character appears only once in the original string, or ")" if that character appears more
// than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//     Examples
//
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("


// my first version
// function duplicateEncode(word){
//     let result = '';
//     for (let i = 0; i < word.length; i++) {
//         let counter = 0;
//         for (let j = 0; j < word.length; j++) {
//             word[i].toLocaleLowerCase() === word[j].toLocaleLowerCase() && counter++;
//         }
//         counter > 1 ? result += ')' : result += '(';
//     }
//     return result;
// }

// refactored
function duplicateEncode(word) {
    return Array.from(word.toLowerCase())
        .map((a, i, w) => {
            return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'
            })
        .join('');
}

// console.log(duplicateEncode('heLlo there!'));