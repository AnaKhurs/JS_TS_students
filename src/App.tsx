import React from 'react';
import './App.css';

function App() {
    //const names = ["Dima", "Sveta", "Nastya", "Lexa", "Lena"]
    const user = [
        {name: "Dima"}, {name: "Sveta"}, {name: "Nastya"}, {name: "Lexa"},{name: "Lena"}
    ]
    //const liElements = names.map(n => <li>{n}</li>)
    const liElements = user.map((u, index) => <li key={index}>{index} - {u.name}</li>)
    return (
        <div>
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
