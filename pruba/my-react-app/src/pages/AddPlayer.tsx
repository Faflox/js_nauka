import React, { useState } from "react";

interface Player {
  name: string;
}

const AddPlayer: React.FC = () => {
  const [playerName, setPlayerName] = useState<string>("");
  const [players, setPlayers] = useState<Player[]>([]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = playerName.trim();
    if(trimmedName) {
      setPlayers([...players, { name: trimmedName }]);
      setPlayerName("");
    } else {
      alert("Nazwa gracza nie moze byc pusta!")
    }
  };

  return (
    <div>
      <h1>Dodaj gracza</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Imię:</label>
          <input
            type="text"
            id="name"
            value={playerName}
            onChange={handleNameChange}
            required
          />
        </div>
        <button type="submit">Dodaj gracza</button>
      </form>
      <h2>Lista graczy</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddPlayer;
