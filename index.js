function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a","e","i","o","u"]
  
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])) vowelsCount += 1
  }
  
  return vowelsCount;
}


// Regex solution
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }