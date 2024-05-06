import React, { useState } from 'react';
import Shop from "./Shop";
import AdminPanel from './AdminPanel';

export default function Login(){
    let items = [{id: 1, name: "Item 1", price: 10},{id: 2, name: "Item 2", price: 15},{id: 3, name: "Item 3", price: 20}];

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let accounts = [{id: 1, username: "customer", password: "customer", role: "customer"},{id: 2, username: "admin", password: "admin", role:"admin"}];

    const [role, setRole] = useState("");

    const [enteredUsernames, setEnteredUsernames] = useState("");

    const [enteredPasswords, setEnteredPasswords] = useState("");

    function getUserName(){
        setEnteredUsernames(event.target.value);
    }

    function getPassword(event){
        setEnteredPasswords(event.target.value);
    }

    function handleLogin(){
        accounts.map((account) => {
            if(account.username === enteredUsernames && account.password === enteredPasswords){
                setIsLoggedIn(true);
                setRole(account.role);
            }
        })
    }

    function handleLogout(){
        setIsLoggedIn(false);
        setRole("");
    }


    const renderLogin = () => {
        return (
            <div class="background">
                <div class="login">
                    <h1>Login</h1>
                        Username: <input type="text" placeholder="Username" id = "username" onChange={getUserName}/><br />
                        Password: <input type="password" placeholder="Password" id = "password" onChange={getPassword}/><br />
                        <br/>
                        <button type="button" onClick = {handleLogin}>Login</button>
                </div>
            </div>
        );
    }

    const renderShop = () => {
        return (
            <div class="background">
                <div class="topnav">
                    <button type="button" onClick = {handleLogout}>Logout</button>
                </div>
                <div class="shop">
                    <Shop isLoggedIn = {isLoggedIn} items = {items}/>
                </div>
            </div>
        );
    }

    const renderAdmin = () => {
        return (
            <div class="background">
                <div class="topnav">
                    <button type="button" onClick = {handleLogout}>Logout</button>
                </div>
                <AdminPanel isLoggedIn = {isLoggedIn} accounts = {accounts}/>
            </div>
        );
    }

    if(isLoggedIn === false){
        return renderLogin();
    }else{
        if(role === "admin"){
            return renderAdmin();
        }else{
            return renderShop();
        }
    }
}