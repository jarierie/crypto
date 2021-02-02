import React, { useState, useEffect } from "react";
import "./App.css";
import Coin from "./Coin";

function App() {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCoin(res);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(coin);
  };

  const filtered = coin.filter((coins) => {
    return coins.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App flex flex-col items-center">
      <div className="text-7xl mb-10 mt-10 text-yellow-400	">Crypto</div>
      <div className="text-4xl">
        <input
          onChange={handleChange}
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg"
        ></input>
      </div>
      <div className="waha flex flex-col mt-10 ">
        {filtered.map((data, index) => {
          return (
            <Coin
              key={index}
              img={data.image}
              name={data.name}
              symbol={data.symbol}
              priceChange={data.price_change_percentage_24h}
              currentPrice={data.current_price}
              circulatingSupply={data.circulating_supply}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
