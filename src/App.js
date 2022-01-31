import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPick from "./components/CountryPick/CountryPick";

import React, { useState, useEffect } from "react";
const App = () => {
  const url = "https://covid19.mathdro.id/api";
  const [data, setData] = useState({
    confirmed: "",
    recovered: "",
    deaths: "",
    lastUpdate: "",
  });
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json)
      .then((data) => {
        const { data: confirmed, recovered, deaths, lastUpdate } = data;
        setData({
          confirmed: confirmed,
          recovered: recovered,
          deaths: deaths,
          lastUpdate: lastUpdate,
        });
      });
  }, []);
  console.log(data);
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPick />
      <Chart />
    </div>
  );
};

export default App;
