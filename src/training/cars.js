const cars = [
  { id: 1, name: "Ford", color: "red", price: 20000 },
  { id: 2, name: "Chevrolet", color: "blue", price: 15000 },
  { id: 3, name: "Nissan", color: "green", price: 10000 },
  { id: 4, name: "Honda", color: "red", price: 5000 },
  { id: 5, name: "Toyota", color: "black", price: 25000 },
  { id: 6, name: "Mazda", color: "black", price: 30000 },
  { id: 7, name: "Mercedes", color: "silver", price: 40000 },
  { id: 8, name: "Audi", color: "orange", price: 35000 },
  { id: 9, name: "BMW", color: "purple", price: 45000 },
  { id: 10, name: "Lexus", color: "pink", price: 55000 },
];

// Returns cars with price greater than 30000 (filter only)

const carsGreaterThan30000 = cars.filter((car) => car.price > 30000);

console.log({carsGreaterThan30000});

// Returns cars with price lower than 30000 (filter only)

const carsLowerThan30000 = cars.filter((car) => car.price < 30000);

console.log({carsLowerThan30000});

// Returns cars with red color (filter only)

const redCars = cars.filter((car) => car.color === "red");

console.log({redCars});

// Returns cars with black color (filter only)

const blackCars = cars.filter((car) => car.color === "black");

console.log({blackCars});

// Return cars without id, example { name: 'Lexus', color: "pink", price: 55000 } (map only)

const carWithoutId = cars.map((car) => ({
    name: car.name,
    color: car.color
}));

console.log({carWithoutId});