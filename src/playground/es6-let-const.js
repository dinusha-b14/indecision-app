var nameVar = 'Dinusha';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

const fullName = 'Dinusha Bodhinayake';
let firstName;

const getFirstName = (fullName) => fullName.split(' ')[0];

if (fullName) {
    firstName = getFirstName(fullName);
    console.log(firstName);
}

console.log(firstName);
