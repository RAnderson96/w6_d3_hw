const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
        let wordToCheck = this.word.toLowerCase().split('');
        
        // console.log(wordToCheck)
        const isogramCheck = wordToCheck.every((element, index, wordToCheck) => {
            return wordToCheck.indexOf(element) == index;

        } )
        return isogramCheck
}

module.exports = IsogramFinder;



// PangramFinder.prototype.isPangram = function () {
//     let tidyPhrase = this.phrase.toLowerCase();
//     tidyPhrase.split('')
//     const checkPangram = this.alphabet.every((element) => {
//       return tidyPhrase.includes(element)
//     })
//     return checkPangram
  
//   }