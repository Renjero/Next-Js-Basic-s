import FilterUser from "@/app/compoents/FilterUser";

type User = {
    id : Number ;
    name : String;
    username : String;
}

//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();




export default async function Student (){


    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    // console.log(response)
    return (
        <>
        <h1> classromm</h1>
        <p>hello</p>
        <FilterUser users={users}/>
        </>
    )
}