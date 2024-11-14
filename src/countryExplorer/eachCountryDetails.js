import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./eachCountryDetails.css";
import { BeatLoader } from "react-spinners";

const EachCountryData = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountryDetails();
  }, [countryName]); 

  const fetchCountryDetails = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      setCountry(response.data[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching country details", error);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <BeatLoader color="black" size={15} cssOverride={{ display: "inline-block" }} />
        </div>
      ) : (
        <div className="eachcountry">
          <div className="country-card">
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt={country.name.official} width="300px" className="flag" />

            <p className="detail">
              <span className="detail-label">Official Name:</span> {country.name.official}
            </p>
            <p className="detail">
              <span className="detail-label">Capital:</span> {country.capital}
            </p>
            <p className="detail">
              <span className="detail-label">Region:</span> {country.region}
            </p>
            <p className="detail">
              <span className="detail-label">Signs as:</span> {country.car.signs}
            </p>
            <p className="detail">
              <span className="detail-label">Currencies:</span> {country.currencies ? Object.values(country.currencies).map((currency, index) => (
                <span key={index}>{currency.name} ({currency.symbol})</span>
              )) : "N/A"}
            </p>
            <p className="detail">
              <span className="detail-label">Postal Code:</span> {country.postalCode?.format || 'N/A'}
            </p>
            <p className="detail">
              <span className="detail-label">Borders:</span> {country.borders ? country.borders.join(", ") : 'N/A'}
            </p>
            <p className="detail">
              <span className="detail-label">Population:</span> {country.population}
            </p>
            <p className="detail">
              <span className="detail-label">Subregion:</span> {country.subregion}
            </p>
            <p className="detail">
              <span className="detail-label">Total Area:</span> {country.area} km²
            </p>
            <p className="detail">
              <span className="detail-label">Start of Week:</span> {country.startOfWeek}
            </p>
            <p className="detail">
              <span className="detail-label">Time Zone:</span> {country.timezones.join(", ")}
            </p>
            <p className="detail">
              <span className="detail-label">Alternative Names:</span> {country.altSpellings.join(", ")}
            </p>

            {country.coatOfArms?.png && (
              <img src={country.coatOfArms.png} alt="Coat of Arms" className="coat-of-arms" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EachCountryData;
