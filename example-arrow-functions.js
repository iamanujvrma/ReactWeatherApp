var names = ['Anuj', 'Chandu', 'Alam'];
/*
names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('Arrow functions', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('Anuj'));

var person = {
  name: 'Anuj',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to '+ name);
    });
  }
}

person.greet();
*/

function add (a, b) {
  return a+b;
}

addStatement = (a, b) => {
  return a+b;
}

addExpression = (a, b) => (a+b);

console.log(add(1, 3));
console.log(add(9, 0));
console.log(addExpression(1, 3));
console.log(addStatement(9, 0));
