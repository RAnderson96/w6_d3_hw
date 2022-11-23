const AnagramFinder = function (word) {
this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    let wordArray = this.word.toLowerCase().split('');
    let otherWordsArray = otherWords.map((word) => {
        return word.toLowerCase().split('');
    })
    for (word of otherWords) {
        if ()
    }














}
    // let wordLength = this.word.length
    // console.log(wordLength)

//     let wordArray = this.word.toLowerCase().split('');
//     let otherWordsArray = otherWords.map((word) => {
//         return word.toLowerCase().split('');

//     })
    
//     const checkifAnagram = otherWordsArray.every((element, index) => {
//         return wordArray.includes(element)
//       })
      
//     if (checkifAnagram) {
//         const anagramChecker = otherWords.filter((word) => {
//     }

    
    
    

    
// })  
//     return anagramChecker;
// }
module.exports = AnagramFinder;


// if word is anagram filter to new list
