let a = 5; // Value can be modified
const b = 10; // Value cannot be modfied

a = a + b;
// console.log(a)


function combineTwo(num1, num2) {
   let result; //null
//    console.log('Result on init', result)
   result = (num1 + num2 ) * 2;
   console.log(result)
}


// combineTwo(a, b)


function stringManipulator(name, age, town) {
    return  `Hello, my name is ${name}.
            I am ${age} years old and I am living in ${town}`
}

console.log(stringManipulator('Pesho', 16, 'Svilengrad'))
