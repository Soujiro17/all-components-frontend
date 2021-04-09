import React from 'react'

export default function Card({ title, stock, link, image, price}) {

    const add3Dots = (string, limit) =>{
    var dots = "...";
    if(string.length > limit)
    {
        string = string.substring(0,limit) + dots;
    }
    
        return string;
    }

    return (
        <div className="row">
            <div className="col s9">
                <div className="card" style = {{textAlign: 'center', width: '200px', height: '320px'}}>
                    <div className="card-image">
                        <img src={image} alt = {title}/>
                    </div>
                    <div className="card-content" style = {{padding: '10px'}}>
                        <p>{add3Dots(title, 40)}</p>
                        <p style = {{color: 'green'}}>${price}</p>
                        <span style = {{color: 'red'}}><p>{stock}</p></span>
                    </div>
                    <div className="card-action" style = {{position: 'absolute', bottom: '0', right: '0', left: '0'}}>
                        <a href= {link} style = {{margin: '0'}}>Ir al producto</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
