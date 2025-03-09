import { useEffect, useState } from "react";
import Card from "./card";


export default function Content(){
    var [array,setArray]= useState([]);
    useEffect(()=>{
        var fn=fetch('https://67cd3597dd7651e464eda54f.mockapi.io/food')
            .then((r)=>r.json().then((d)=>{
                setArray(d);
                console.log(array);
            })
            )
    },[])
    
    // console.log(fn)
    return (
        <>
            <Card array={array}/>
        </>
    )
}