export const randUserApi = 'https://jsonplaceholder.typicode.com/users';
export const getRandomUser = async () => {
  const data = await fetch(randUserApi);
  return data.json();
};
