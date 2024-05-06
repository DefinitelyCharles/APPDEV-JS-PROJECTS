import React, { useState } from "react";
import Login from "./Login";

export default function Shop(props) {
    let ShopItems = props.items;

    const [cart, setCart] = useState([]);

    function AddItem(item) {
        setCart((cart) => [...cart, item]);
    }

    const renderItems = () => {
        return ShopItems.map((item) => {
            return (
            <>
                <li key={item.id}>{item.name}</li>
                <p>Price per piece: ${item.price}</p>
                <button onClick={() => AddItem(item)}>Add to Cart!</button>
                <br />
            </>
            );
        });
    };

    const renderCart = () => {
        return cart.map((item) => {
            return (
                <li key={item.id}>{item.name}</li>
            );
        });
    };

    if (props.isLoggedIn === false) {
        return <Login />;
    } else {
        return (
        <>
            <div class="shopleft">
                <h1>This is the shop</h1>
                <ul>{renderItems()}</ul>
            </div>
            <div class="shopright">
                <h2>Cart items </h2>
                <ul>{renderCart()}</ul>
            </div>
        </>
        );
    }
}