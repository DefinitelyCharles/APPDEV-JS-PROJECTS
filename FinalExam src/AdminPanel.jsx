import React, { useState } from "react";
import Login from "./Login";

export default function AdminPanel(props) {
    let accounts = props.accounts;
    const [devlogs, setDevlogs] = useState([]);

    function AddDevlog() {
        let devlog = {
            date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            title: document.getElementById("title").value,
            content: document.getElementById("content").value,
        };
        
        setDevlogs((devlogs) => [...devlogs, devlog]);
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
    }

    const renderAccounts = () => {
        return accounts.map((account) => {
            return (
                <div key={account.id}>
                <h2>{account.username}</h2>
                <p>{account.role}</p>
                </div>
            );
        });
    };

    const renderDevlogHistory = () => {
        return devlogs.map((devlog, index) => {
            return (
                <div key={index}>
                <h2>{devlog.title}</h2>
                <p>{devlog.content}</p>
                </div>
            );
        });
    };

    if (props.isLoggedIn === false) {
        return <Login />;
    } else {
        return (
            <div class="background">
                <div class="panel">
                    <h1>This is the admin panel</h1>
                    <p>These are the active accounts: </p>
                    {renderAccounts()}
                    <br />
                    <hr />
                    <h4>Admin Devlogs</h4>
                    Title: <input type="text" name="title" id="title" />
                    <br />
                    <br />
                    Content:
                    <br />
                    <textarea name="content" id="content" cols="50" rows="10"></textarea>
                    <br />
                    <button type="submit" onClick={AddDevlog}>Submit</button>
                    <h4>Devlog History:</h4>
                    {renderDevlogHistory()}
                </div>
            </div>
        );
    }
}