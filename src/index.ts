// let age: number = 10 ; 

// if (age < 50 ) {
//     age += 10;
//     console.log (age);
// }


let numbers: number[] = [];

numbers.push(2);
// numbers[1] = 'string'; // string cant be added in the numbers array  => error

// numbers.push('ash') ; // its cant be pushed either in numbers array  so ;  => error

let anyArray: any[] = [];
anyArray.push(3);
anyArray.push('ashwin'); // since its any type we can push string also

console.log('Any type array' , anyArray); 
console.log(numbers , 'numbers Araay');