const children = ['Jake', 'Abigail', 'Carter', 'Morgan', 'Sam', 'Helena', 'Avery', 'Franklin', 'Gretchen'];
let unSelectedChildren = [...children];
const selectedChildren = [];

const values = children.reduce((acc, child) => {
  return [
    ...acc,
    {
      giver: child,
      person: null,
      parent: null
    }
  ]
}, []);


function getRandomNumber(index) {
  const randomNumber = Math.round(Math.random() * (unSelectedChildren.length -1));
  if (randomNumber === index) {
    getRandomNumber(index);

  }
  return randomNumber;
}

children.forEach((child, i) => {
  const selectedIndex = getRandomNumber(i);
  values[i].person = unSelectedChildren[selectedIndex];
  unSelectedChildren = [
    ...unSelectedChildren.slice(0, selectedIndex),
    ...unSelectedChildren.slice(selectedIndex + 1)
  ]
})

console.log(values);