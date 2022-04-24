// Gives these lists of users and cities, format them
const users = [
    { id: 1, name: 'Mateo', city: 1 },
    { id: 2, name: 'Bryan', city: 2 },
    { id: 3, name: 'Leidy', city: 2 }
  ]
  
  const cities = [
    { id: 1, name:  'Amsterdam' },
    { id: 2, name: 'Medellin' }
  ]
  
  // Expected result
  const result = [
    { name: 'Mateo', city: 'Amsterdam' },
    { name: 'Bryan', city: 'Medellin' },
    { name: 'Leidy', city: 'Medellin' }
  ]
  
  // Extra bonus
  
//   1. Return a list with the people that live only in Medellin
  
  const peopleFromMedellin = [
    { name: 'Bryan', city: 'Medellin' },
    { name: 'Leidy', city: 'Medellin' }
  ]
  
//   2. Create a function to add birthdates dynamically to all the users. (hard difficulty)

// Filters people from Medellin
const usersFromMedellin = users.filter((user) => {
  return user.city === 2
});

// Formats the users from Medellin to display city name instead of city id
const usersWithCitiesFormatted = usersFromMedellin.map((user) => {
    const city = cities.filter((city) => city.id === user.city)[0].name;

    return {
      ...user,
      city: city
    }
});


const usersWithoutCity = users.map((user)  => {
  return user.name;
})

// const medellin = cities.filter((city) => city.id === 2);

console.log({ usersWithCitiesFormatted });