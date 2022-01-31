import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fecthData = async () => {
  try {
    const {
      data: confirmed,
      recovered,
      deaths,
      lastUpdate,
    } = await axios.get(url);

    const modifiedData = {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate,
    };
    console.log(modifiedData);
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
