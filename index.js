const getRandomNumber = require('./getRandomNumber');

const children = ['Jake', 'Abigail'];
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

children.forEach((child, i) => {
  const selectedIndex = getRandomNumber(i, unSelectedChildren);
  values[i].person = unSelectedChildren[selectedIndex];
  unSelectedChildren = [
    ...unSelectedChildren.slice(0, selectedIndex),
    ...unSelectedChildren.slice(selectedIndex + 1)
  ]
})

console.log(values);