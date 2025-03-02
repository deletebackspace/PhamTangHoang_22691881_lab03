import { useState } from "react"

export default function Calcullation(){
   
    var [a,setA]= useState(0);
    var [b,setB]= useState(0);
    var [c,setC]= useState(0);
    var [d,setD]= useState(0);

    const calculater= (e)=>{
        
    }


    const insertRow=(e)=>{

    }



    return (
        <>
        <h1>Calculation Investment</h1>
        <span>Money</span><input type="text" placeholder="Nhập tiền" />
        <br />
        <span>Rate</span> <input type="text" placeholder="Nhập tỉ lệ" />
        <br />
        <span>Goal</span> <input type="text" placeholder="Nhập mục tiêu" />
        <br />
        <input type="button" value="Cal" onClick={calculater} />

        <table>

            <tr>
                <td>Year</td>
                <td>Money</td>
                <td>Rate</td>
                <td>Result</td>
            </tr>
            <tr>
                
            </tr>

        </table>


        
        
        
        </>
    )
}