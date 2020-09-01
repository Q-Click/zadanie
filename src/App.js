import React, { useState } from "react";
import "./App.css";

function App() {
  const [population, setPopulation] = useState(0);
  const [food, setFood] = useState(0);
  const [gold, setGold] = useState(2000);
  const [farms, setFarms] = useState(0);
  const [houses, setHouses] = useState(0);
  const [day, setDay] = useState(0);

  function buildFarm() {
    setFarms(farms + 1);
    setGold(gold - 500);
  }
  function buildHouse() {
    setHouses(houses + 1);
    setGold(gold - 500);
  }

  function endDay() {
    setDay(day + 1);
    setFood(food + farms * 2 - houses);
    setPopulation(population + houses * 2);
  }

  return (
    <div className="App">
      <div className="resources">
        <div className="population">Population: {population}</div>
        <div className="food">Food: {food}</div>
        <div className="gold">Gold: {gold}</div>
        <div className="date">Date: {day}</div>
      </div>

      <ul className="buidling-list">
        <li>
          Farm (costs: 500 gold, produce: 2 food)
          <button onClick={buildFarm}>build</button>
        </li>
        <li>
          House (costs: 500 gold, -1 food/daily, produce: 2 population)
          <button onClick={buildHouse}>build</button>
        </li>
      </ul>

      <ul className="built">
        <li>Farms: {farms}</li>
        <li></li>Houses: {houses}
      </ul>
      <button onClick={endDay} className="end">
        End Turn
      </button>
    </div>
  );
}

export default App;
