function getRandomNumber(index, unSelectedChildren) {
  console.log(unSelectedChildren.length)
  const randomNumber = Math.round(Math.random() * (unSelectedChildren.length - 1));
  if (randomNumber === index) {
    getRandomNumber(index, unSelectedChildren);
  }
  return randomNumber;
}

module.exports = getRandomNumber;