export const url = `https://nykaa-deployed.onrender.com/users`;

export const getdata = async (url) => {
  let res = await fetch(`${url}`);
  let data = await res.json();
  return data;
  console.log(data);
};
