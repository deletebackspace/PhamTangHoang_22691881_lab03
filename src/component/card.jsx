import '../card.css'

export default function Card({array}){
    return (
        <>
            {
                array.map((item,index)=>{
                    return (
                        <div>
                            <div className="card">
                                <img src={item.avatar} alt="Avatar" style="width:100%"/>
                                <div className="container">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                }

                )
            }
        </>
    )
}

