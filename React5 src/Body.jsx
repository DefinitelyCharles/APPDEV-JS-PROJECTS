import React, { useState } from 'react';

export default function Body() {
  const [cartItems, setCartItems] = useState([]);
  const prices =            [1, 3, 3, 2, 1, 3, 1, 1, 5, 5, 5, 5, 4, 4, 1, 1];
  const defaultAmounts =    [4, 8, 8, 12, 6, 10, 4, 4, 3, 3, 3, 3, 5, 5, 9, 9];

  const addToCart = (itemName, price, defaultAmount) => {
    const itemIndex = cartItems.findIndex(item => item.name === itemName);

    if (itemIndex !== -1) {
      // If the item already exists in the cart, increase its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the item doesn't exist in the cart, add it
      setCartItems([...cartItems, { name: itemName, price: price, quantity: defaultAmount }]);
    }
  };

  // Calculate total price of items in the cart
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      {[...Array(16)].map((_, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <br/>
          <img src={`/src/${getItemImage(index)}.png`} alt={getItemName(index)} />
          <img src={`/src/${getItemImage(index)}.jfif`} alt={getItemName(index)} />
          <p><strong>{getItemName(index)}</strong></p>
          <p>Price: {prices[index]} Emeralds</p>
          <p>Default Amount: {defaultAmounts[index]}</p>
          <br/>
          <button onClick={() => addToCart(getItemName(index), prices[index], defaultAmounts[index])}>Add to Cart</button>
        </div>
      ))}
      <div>
        <h3>Cart</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: {total} Emeralds</p>
      </div>
    </div>
  );
}

function getItemName(index) {
  const names = ["Apple", "Carrot", "Potato", "Wheat", "Bread", "Beetroot", "Glowberry", "Sweetberry", "Beef", "Porkchop", "Chicken", "Rabbit", "Salmon", "Cod", "Pumpkin", "Melon"];
  return names[index] || "Unknown";
}

function getItemImage(index) {
    const images = ["apple", "carrot", "potato", "wheat", "bread", "beetroot", "glowberry", "sweetberry", "beef", "porkchop", "chicken", "rabbit", "salmon", "cod", "pumpkin", "melon"];
    return images[index] || "unknown";
  }
  

