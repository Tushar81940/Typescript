const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'] as const;

console.log(fruits);

// fruits.push('pear'); 
// Error: Property 'push' does not exist on type 'readonly ["apple", "banana", "cherry", "date", "elderberry"]'.