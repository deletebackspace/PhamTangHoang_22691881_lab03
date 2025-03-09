
import '../menu.css'

export default function Menu(){

   
    return (
        <>
            <p style={{textAlign: 'left'}}>Home Your Recipe Box</p> 

            <h2 style={{textAlign: 'left'}} >Emma Gonzalez's Recipe Box</h2>
            <div className='image'>
                <img src="../src/assets/avatar.png" alt="" />
                <div>
                    <p>Emma Ganzalez is a deputy at Chefify, bringing her expertise as a farmer cooking editor at The 
                        Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. 
                        Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
                    </p>
                    <p style={{display:'flex'}}>6.5 Subscribes <input style={{backgroundColor: 'pink'}} type="button" value="Share" /></p>
                </div>
            </div>
            <span style={{display:'flex'}}><button>Saved Recipes</button><button>Folders</button><button>Recipes by Gonzalez</button></span>
        </>
    )
}