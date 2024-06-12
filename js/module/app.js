import {headers} from "../components/env.js";

export const  getAllProductName = async({search:text} = {search:"Phone"}) => {
    console.log ("Esperando ....");
    const options = {
        method: 'GET',
        headers
    };
}
let res = await fetch (url, options);
let data = res.josn ();
return data;