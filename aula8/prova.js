function getFirstString(arr) {
    return arr.shift();
  }
  
  const stringsArray = ["apple", "banana", "cherry"];
  const firstString = getFirstString(stringsArray);
  console.log(firstString);