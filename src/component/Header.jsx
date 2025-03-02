import { useState } from "react"

export default function Header(){
   
   
    return (
        <>
                <div><img src="../src/assets/chefify.png" alt="" /></div>
                <div><input type="text" /></div>
                <div>What to cook</div>
                <div>Recipes</div>
                <div>Ingredients</div>
                <div>Occasions</div>
                <div>About us</div>
                <div><img src="../src/assets/checkboxpink.png" alt="" />Your Recipe Box</div>
                <div><img src="../src/assets/avatar.png" alt="" /></div>
        </>
    )
}