const findDuplicates = (array) => {

  for (let i = 0; i < array.length; i++) {
    let wordToCheckAgainst = array[i];
    array[i] = "";
    if (wordToCheckAgainst != "" && array.includes(wordToCheckAgainst)) {
      array[i] = wordToCheckAgainst;
    }
  }

  return array.filter((word) => word.length > 0);
};

module.exports = findDuplicates;
