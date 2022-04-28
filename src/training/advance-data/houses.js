

const houses = [
    { id: 1, city: 'Medellin', state: 'Antioquia', size: 100, price: 2000000, sellerId: 1 },
    { id: 2, city: 'Bogota', state: 'Cundinamarca', size: 200, price: 1500000, sellerId: 2 },
    { id: 3, city: 'Cali', state: 'Valle', size: 300, price: 3000000, sellerId: 3 },
    { id: 4, city: 'Cartagena', state: 'Bolivar', size: 400, price: 4000000, sellerId: 4 },
    { id: 5, city: 'Barranquilla', state: 'Atlantico', size: 500, price: 5000000, sellerId: 5 },
    { id: 6, city: 'Bucaramanga', state: 'Santander', size: 600, price: 6000000, sellerId: 6 },
    { id: 7, city: 'Santa Marta', state: 'Magdalena', size: 700, price: 7000000, sellerId: 7 },
    { id: 8, city: 'Pasto', state: 'Nariño', size: 800, price: 8000000, sellerId: 8 },
    { id: 9, city: 'Cucuta', state: 'Norte de Santander', size: 900, price: 9000000, sellerId: 9 },
    { id: 10, city: 'Manizales', state: 'Caldas', size: 1000, price: 10000000, sellerId: 10 },
    { id: 11, city: 'Envigado', state: 'Antioquia', size: 1200, price: 2000000, sellerId: 2 },
    { id: 12, city: 'Itagui', state: 'Antioquia', size: 1300, price: 3000000, sellerId: 3 },
    { id: 13, city: 'Floridablanca', state: 'Bolivar', size: 1400, price: 4000000, sellerId: 4 },
]

// Filter houses with price greater than 500000
const housesPriceGreaterThan500000 = houses.filter((house) => house.price > 500000);

// console.log({housesPriceGreaterThan500000});

// Filter houses with price lower than 500000

const housesPriceLowerThan500000 = houses.filter((house) => house.price < 500000);

// console.log({housesPriceLowerThan500000});


// Map houses without id, example { city: 'Floridablanca', state: 'Bolivar', size: 1400, price: 4000000, sellerId: 4 }

const withoutId = houses.map((house) => {
    return {
        city: house.city,
        state: house.state,
        size: house.size,
        price: house.price,
        sellerId: house.sellerId
    }
})

// console.log({withoutId});

// Map houses without id and price, example { city: 'Floridablanca', state: 'Bolivar', size: 1400, sellerId: 4 }

const withoutIdAndPrice = houses.map((house) => {
    return {
        city: house.city,
        state: house.state,
        size: house.size,
        sellerId: house.sellerId
    }
})

// console.log({withoutIdAndPrice});

// Map houses without id, price and city, example { state: 'Bolivar', size: 1400, sellerId: 4 }

const withoutIdAndPriceAndCity = houses.map((house) => {
    return {
        state: house.state,
        size: house.size,
        sellerId: house.sellerId
    }
})

// console.log({withoutIdAndPriceAndCity});

// Filter houses with seller id 2

const housesSellerId2 = houses.filter((house) => house.sellerId === 2);

// console.log({housesSellerId2});

// Group houses by city

const groupByCity = houses.reduce((group, house) => {
    const { city } = house;
    group[city] = group[city] ?? [];
    group[city].push(house);
    return group;
  }, {});
  console.log(groupByCity);


// Group houses by state

const groupByState = houses.reduce((group, house) => {
    const { state } = house;
    group[state] = group[state] ?? [];
    group[state].push(house);
    return group;
  }, {});

  console.log(groupByState);


