import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Country from "./Components/Country";
import CountryInfo from "./Components/CountryInfo";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  let countryList;
  if (countriesToShow.length > 10) {
    countryList = <p>Too many matches, specify another filter</p>;
  } else if (countriesToShow.length == 1) {
    countryList = <CountryInfo country={countriesToShow[0]} />;
  } else {
    countryList = (
      <ul>
        {countriesToShow.map((country) => (
          <Country country={country} />
        ))}
      </ul>
    );
  }

  return (
    <div className="App">
      <input value={filter} onChange={handleFilterChange} />
      <h1>COUNTRIES</h1>
      {countryList}
    </div>
  );
};

export default App;
