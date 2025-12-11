// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  let word = [];
  if (title.includes('!') || title.includes('#') || title.includes('?')){
    return null
  };
  for (let i = 0; i < title.length; i++){
    if (title[i] === ' '){
      word.push('-');
    } else {
      word.push(title[i].toLowerCase());
    };
  };
newWord = word.join('');
return newWord;
};
// Testing:
// console.log(createSlug("Hello World"));

module.exports = {
  createSlug,
};
