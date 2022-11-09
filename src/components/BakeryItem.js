// TODO: create a component that displays a single bakery item
import { useState } from 'react';

export default function BakeryItem({prop1, prop2, updateClick}) {
    
    return (
        <div>
            <img src={prop1.image}/>
            <h1>{prop2} {prop1.name}</h1>
            <h2>{prop1.price}</h2>
            <button onClick={() => updateClick(prop1.name, prop1.price)}>Add to cart</button>
        </div>
    )
}