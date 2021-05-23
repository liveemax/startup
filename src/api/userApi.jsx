const url = `https://api.github.com/users`;
const error = `Error in userApi`;

export const get = async (user) => {
  try {
    let result = await fetch(`${url}/${user}`);
    result = result.json();
    return result;
  } catch (e) {
    console.log(new Error(`${error} get`));
  }
};
