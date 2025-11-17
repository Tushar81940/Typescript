const users = new Map();
users.set("id", 101);
users.set("name", "Tushar");

console.log(users);


//Typed Map

const scores = new Map<string, number>();

scores.set("math", 95);
scores.set("science", 88);

console.log(scores.get("math"));   // 95
