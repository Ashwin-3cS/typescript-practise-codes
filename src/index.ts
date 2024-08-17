// Type Strict

// let age: number = 10 ; 

// if (age < 50 ) {
//     age += 10;
//     console.log (age);
// }


// Arrays in TS

let numbers: number[] = [];

numbers.push(2);
// numbers[1] = 'string'; // string cant be added in the numbers array  => error

// numbers.push('ash') ; // its cant be pushed either in numbers array  so ;  => error

let anyArray: any[] = [];
anyArray.push(3);
anyArray.push('ashwin'); // since its any type we can push string also

console.log('Any type array' , anyArray); 
console.log(numbers , 'numbers Araay');

// Tuples in TS ; tuples are fixed length array ; better to use for key-value pairs

let user: [number,string] = [10,'Ash'];
// user.push('ash'); // it wont throw error ; its a gap in ts ; better not to use .push on tuples 

// user[2] = 'string'; // it will lead to an error because we try to add string in the user tuple which is defined for only two elements
console.log('user',user)



//enum in TS


enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  let move: Direction = Direction.Up;
  console.log(move); // Output: 0


//   Customizing Enum Values

enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
  }
  
  let code: StatusCode = StatusCode.NotFound;
  console.log(code); // Output: 404

  
//   String Enums

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
  }
  
  let color: Color = Color.Green;
  console.log(color); // Output: "GREEN"





//   Reverse Mapping

  
  let directionName: string = Direction[0];
  console.log(directionName); // Output: "Up"
  
  
  //Type annotations 

  function moveInDirection(direction: Direction) {
    if (direction == 3) { 
        console.log("Turn left 3 inches");
    }
}
  
  moveInDirection(Direction.Left); // output : 3


  //Function in TS

//   function calculateTax (income: number, taxYear: number): number{ // we can also type annotate which type the function will return 
//     if((taxYear || 2022) < 2022){
//         return income * 1.2;
//     }
//     return income * 1.3;
//   }

// calculateTax(10_000, 2023); 


function calculateTax (income: number, taxYear = 2022): number{  // if the taxYear is not passed in arguments then 2022 is the default value that will be taken 
  if(taxYear < 2022){
      return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000);
  

  