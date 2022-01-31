import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPick from "./components/CountryPick/CountryPick";
function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPick />
      <Chart />
    </div>
  );
}

export default App;
