import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import EmojiData from "./db.json";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.description.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <div className="App">
      <center>
        <h1>😺Emoji Search App😸</h1>
        <input
          size="30"
          type="text"
          value={search}
          placeholder="Search Emoji"
          onChange={(e) => setSearch(e.target.value)}
        />
      </center>
      {data.map((emoji) => (
        <div className="card" key={emoji.description}>
          <div
            className="card-body"
            onClick={() => {
              navigator.clipboard.writeText(emoji.emoji);
              alert("Emoji Copy");
            }}
          >
            <span class="space">
              <span>{emoji.emoji} {emoji.description}</span>
              <span>Emojiyi kopyala</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
