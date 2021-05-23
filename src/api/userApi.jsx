const url = `https://api.github.com/users`;
const error = `Error in userApi`;

export const get = (user) => {
  try {
    return fetch(`${url}/${user}`);
  } catch (e) {
    console.log(new Error(`${error} get`));
  }
};
