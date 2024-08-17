"use strict";
let numbers = [];
numbers.push(2);
let anyArray = [];
anyArray.push(3);
anyArray.push('ashwin');
console.log('Any type array', anyArray);
console.log(numbers, 'numbers Araay');
let user = [10, 'Ash'];
console.log('user', user);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
let code = StatusCode.NotFound;
console.log(code);
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let color = Color.Green;
console.log(color);
let directionName = Direction[0];
console.log(directionName);
function moveInDirection(direction) {
    if (direction == 3) {
        console.log("Turn left 3 inches");
    }
}
moveInDirection(Direction.Left);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: 'Ash',
    retire: (date) => {
        console.log(date);
    }
};
employee.retire(new Date());
console.log(employee);
//# sourceMappingURL=index.js.map