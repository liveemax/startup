const url = `https://api.github.com/users`;
const error = `Error in userApi`;

export const getUser = async (user) => {
  try {
    let result = await fetch(`${url}/${user}`);
    result = result.json();
    return result;
  } catch (e) {
    console.log(new Error(`${error} get`));
  }
};

export const getRepos = async (user) => {
  try {
    let result = await fetch(`${url}/${user}/repos`);
    result = result.json();
    return result;
  } catch (e) {
    console.log(new Error(`${error} get`));
  }
};
