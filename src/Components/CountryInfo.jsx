import React from "react";
const CountryInfo = (props) => {
  const { name, area, languages, capital, flags } = props.country;
  const numbers = [1, 2, 3, 4, 5];
  const languageArray = Object.values(languages).map((l) => <li>{l}</li>);
  // const languages = languages.map((l) => <li>{l.eng}</li>);
  return (
    <div>
      <p>{name.common}</p>
      <p>{capital}</p>
      <p>{area}</p>
      <ui>languages: {languageArray}</ui>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            width: "20%",
            height: "20%",
          }}
          src={flags.svg}
          alt=""
        />
      </div>
    </div>
  );
};

export default CountryInfo;
