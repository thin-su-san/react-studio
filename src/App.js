import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  

  const [items, setItem] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (itemName, price) => {
    setItem([...items, itemName]);
    setTotal(total+price);
    // items.push(itemName)
  }

  // function handleClick(newItem) {
  //     setItem(items.push(newItem));
  // }

  return (

    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem prop1={item} prop2={index} updateClick={addToCart}/>

        // <p>Bakery Item {index}</p> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* {items.map((item) => {
          return <p>{item.name}</p>
        })} */}

        {items}
        <h2>Total cost: {total} </h2> 
      </div>
    </div>
  );
}

export default App;
