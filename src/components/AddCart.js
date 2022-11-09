import { useState } from 'react';

export default function BakeryItem({prop1, prop2}) {
    const [itemCount, setItemCount] = useState(0)

    function handleClick() {
        setItemCount(itemCount+1);
    }

    return (
        <div>
            <img src={prop1.image}/>
            <h1>{prop2} {prop1.name}</h1>
            <h2>{prop1.price}</h2>
            <button itemCount={itemCount} onClick={handleClick}>Add to cart</button>
        </div>
    )
}