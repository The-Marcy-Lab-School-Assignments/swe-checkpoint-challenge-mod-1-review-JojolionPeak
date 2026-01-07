// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  let word = [];
  //create a return arr
  if (title.includes('!') || title.includes('#') || title.includes('?')){
    return null
  };
  // if the prohibited characters are present, return null
  for (let i = 0; i < title.length; i++){
    if (title[i] === ' '){
      word.push('-');
      // if there is a space, replace w hyphen
    } else {
      word.push(title[i].toLowerCase());
      // turn letter to lowercase
    };
  };
newWord = word.join('');
// turn the return arr into a string
return newWord;
};
// Testing:
// console.log(createSlug("Hello World"));

module.exports = {
  createSlug,
};
