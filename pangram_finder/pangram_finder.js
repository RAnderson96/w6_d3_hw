const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let tidyPhrase = this.phrase.toLowerCase();
  tidyPhrase.split('')
  const checkPangram = this.alphabet.every((element) => {
    return tidyPhrase.includes(element)
  })
  return checkPangram

}

module.exports = PangramFinder;
