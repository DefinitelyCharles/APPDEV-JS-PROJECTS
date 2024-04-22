import React, {useState} from "react";
export default function FavouriteGames(){
    const [games, setGames] = useState(["Devil May Cry" , "Batman" , "League of Legends" , "Mobile Legends", "Roblox"]);
    function handleRemoveGame(index){
        const deletedGame = games.filter((game, i) => i !== index);
        setGames(deletedGame)
    }

    function handleAddGame(){
        const newGame = document.getElementById("gameInput").value;
        setGames(g  => [...g, newGame ])
        document.getElementById("gameInput").value="";
    }
    return(
        <div>
            <h2>These are my Favourite Games in 2024</h2>
            <ul>
                <h3>Games</h3>
                {
                    games.map((game,index) => <li key = {index} onClick={()=>handleRemoveGame(index)}> {game}</li>)
                }
            </ul>
            <br />
            <h3>Input a game</h3>
            <input type="text" name="gameInput" id="gameInput" /> 
            <br />
                <button type="button" onClick={handleAddGame}>Add Game</button>
        </div>
    );
}