const products = [
    { id: 1, name: 'iPhone X', price: 999.99 },
    { id: 2, name: 'Samsung S10', price: 799.99 },
    { id: 3, name: 'Huawei P30', price: 699.99 },
    { id: 4, name: 'OnePlus 7', price: 599.99 },
    { id: 5, name: 'LG G7', price: 499.99 },
    { id: 6, name: 'Xiaomi Mi9', price: 399.99 },
    { id: 7, name: 'Google Pixel 3', price: 299.99 },
    { id: 8, name: 'Apple iPhone XS', price: 999.99 },
    { id: 9, name: 'Samsung S10+', price: 799.99 },
    { id: 10, name: 'Huawei P30 Pro', price: 699.99 },
]

// Returns products with price greater than 500 (filter only)

const productsGreaterThan500 = products.filter((product) => product.price > 500);
// console.log({productsGreaterThan500});

// Returns products with price lower than 500 (filter only)

const productsLowerThan500 = products.filter((product) => product.price < 500);
// console.log({productsLowerThan500});


// Return products without id, example { name: 'Huawei P30 Pro', price: 699.99 }

const productWithoutId = products.map((product) => {
    return {
        name: product.name,
        price: product.price
    }
})

console.log({productWithoutId});