export const url = `http://localhost:4000/users`

export const getdata = async(url)=>{
    let res = await fetch(`${url}`);
    let data = await res.json()
    return data
    console.log(data);
 }