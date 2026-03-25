export {}; 

// Simple Types
let name: string = "Ajay";
let age: number = 21;
let isStudent: boolean = true;

// Array
let marks: number[] = [90, 85, 88];

// Tuple (fixed types)
let person: [string, number] = ["Ajay", 21];

// Enum (special type)
enum Color {
    Red,
    Green,
    Blue
}
let favColor: Color = Color.Green;

// Any (special type)
let data: any = "Hello";
data = 100;

// Unknown
let value: unknown = "Test";

// Output
console.log(name, age, isStudent);
console.log(marks);
console.log(person);
console.log("Favorite Color:", favColor);
console.log(data);
console.log(value);