const posts = [
  { id: 1, title: "Post 1", body: "This is the body of post 1", authorId: 1 },
  { id: 2, title: "Post 2", body: "This is the body of post 2", authorId: 2 },
  { id: 3, title: "Post 3", body: "This is the body of post 3", authorId: 3 },
  { id: 4, title: "Post 4", body: "This is the body of post 4", authorId: 4 },
  { id: 5, title: "Post 5", body: "This is the body of post 5", authorId: 5 },
  { id: 6, title: "Post 6", body: "This is the body of post 6", authorId: 6 },
  { id: 7, title: "Post 7", body: "This is the body of post 7", authorId: 7 },
  { id: 8, title: "Post 8", body: "This is the body of post 8", authorId: 8 },
  { id: 9, title: "Post 9", body: "This is the body of post 9", authorId: 9 },
  {
    id: 10,
    title: "Post 10",
    body: "This is the body of post 10",
    authorId: 10,
  },
];

const authors = [
  {
    id: 1,
    name: "Author 1",
    profile_image: "https://via.placeholder.com/150",
    personal_information: {
      university: 1,
      age: 20,
      friends: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  {
    id: 2,
    name: "Author 2",
    profile_image: "https://via.placeholder.com/150",
    personal_information: {
      university: 2,
      age: 21,
      friends: [1, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  {
    id: 3,
    name: "Author 3",
    profile_image: "https://via.placeholder.com/150",
    personal_information: {
      university: 3,
      age: 22,
      friends: [1, 2, 4, 5, 6, 7, 8, 9, 10],
    },
  },
];

const universities = [
  { id: 1, name: "University 1" },
  { id: 2, name: "University 2" },
  { id: 3, name: "University 3" },
];


// Returns posts from authorId 1 (filter)

// Returns posts with authorName instead of authorId (map)

// Returns posts without id, example { title: 'Post 1', body: 'This is the body of post 1', authorName: 'Author 1' } (map only)

// Returns posts with author information, example { title: 'Post 1', body: 'This is the body of post 1', author: { id: 1, name: "Author 1", profile_image: "https://via.placeholder.com/150", personal_information: { university: 1, age: 20, friends: [2, 3, 4, 5, 6, 7, 8, 9, 10], }, },  } (map only)

// Returns author from university 1 (filter)

// Returns universities without id, example { name: 'University 1' } (map only)