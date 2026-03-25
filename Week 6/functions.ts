// Function with parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

// Function with no return
function greet(name: string): void {
    console.log("Hello " + name);
}

// Arrow function
const multiply = (x: number, y: number): number => {
    return x * y;
};

// Output
console.log("Sum:", add(5, 3));
greet("Ajay");
console.log("Product:", multiply(4, 2));