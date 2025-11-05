type Class = "wizard" | "Hello" | "warrior";

let player1: Class = "wizard";  // ✅ valid
let player2: Class = "warrior"; // ✅ valid
let player3: Class = "Hello";   // ✅ valid

// let player4: Class = "mage";    // ❌ Error: Type '"mage"' is not assignable to type 'Class'
