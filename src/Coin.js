import { PreviousMap } from "postcss";
import React from "react";
import "./Coin.css";

const Coin = (props) => {
  return (
    <>
      <div className="mainDiv flex flex-row items-center mt-10 border-b-2 justify-between pb-5 flex-wrap">
        <div className="img w-20 h-20">
          <img src={props.img} />
        </div>
        <div className="name ">
          <p>{props.name}</p>
        </div>
        <div className="symbol ">{props.symbol.toUpperCase()}</div>
        <div
          className={props.priceChange > 0 ? "green" : "red"}
        >{`${props.priceChange} %`}</div>
        <div className="current_price ">
          ₱ {props.currentPrice.toLocaleString()}
        </div>
        <div className="circulating_supply ">
          {props.circulatingSupply.toLocaleString()}
        </div>
      </div>
    </>
  );
};

export default Coin;
