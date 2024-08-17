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
  
  
  //TYpe annotations 

  function moveInDirection(direction: Direction) {

}
  
  moveInDirection(Direction.Left); // output : 3

  

  