import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPick from "./components/CountryPick/CountryPick";
import { fecthData } from "./api";
import React from "react";
class App extends React.Component {
  async componentDidMount() {
    const data = await fecthData();
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPick />
        <Chart />
      </div>
    );
  }
}

export default App;
