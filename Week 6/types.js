// Simple Types
var name = "Ajay";
var age = 21;
var isStudent = true;
// Array
var marks = [90, 85, 88];
// Tuple (fixed types)
var person = ["Ajay", 21];
// Enum (special type)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favColor = Color.Green;
// Any (special type)
var data = "Hello";
data = 100;
// Unknown
var value = "Test";
// Output
console.log(name, age, isStudent);
console.log(marks);
console.log(person);
console.log("Favorite Color:", favColor);
console.log(data);
console.log(value);
