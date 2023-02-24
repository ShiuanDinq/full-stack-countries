import React, { useState } from "react";
import CountryInfo from "./CountryInfo";

const Country = (props) => {
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    setPressed(!pressed);
  };

  const info = pressed ? (
    <div>
      <CountryInfo country={props.country} />
      <button onClick={handlePress}>hide</button>
    </div>
  ) : (
    <button onClick={handlePress}>show</button>
  );

  return (
    <div>
      <li>{props.country.name.common}</li>
      {info}
    </div>
  );
};

export default Country;
