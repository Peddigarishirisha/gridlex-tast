import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './countrySearch.css';
import CountriesNavBar from './navbarCountries';
import { NavLink } from 'react-router-dom';

const SearchCountry = () => {
  const [countryDetails, setCountryDetails] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 15;

  const fetchData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountryDetails(response.data);
    } catch (error) {
      console.error('Something went wrong');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const inputHandler = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1); // Reset to the first page on new search
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setCurrentPage(1); // Reset to the first page on Enter press
    }
  };

  const filteredUsersBySearch = countryDetails.filter((user) =>
    user.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredUsersBySearch.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginateNext = () => {
    if (currentPage < Math.ceil(filteredUsersBySearch.length / countriesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="background-container">
     <div className='header_container'>
     <img className='imageset' src="/rb_2147914972.png"></img>
     <div>
     <h1 className='heading_text'>Find Your Next Destination</h1>
     </div>
     
      <CountriesNavBar />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Country Name"
          value={searchValue}
          onChange={inputHandler}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
      </div>
     </div>
     
      
      <br />
      <br />
      <center>
        <div className="main">
          {currentCountries.map((each, index) => (
            <Card className="card" key={index}>
              <Card.Img variant="top" src={each.flags.png} />
              <Card.Body>
                <Card.Title>{each.name.common}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <center><h6>Capital: {each.capital}</h6></center>
                </ListGroup.Item>
                <ListGroup.Item>
                  <center><h6>Region: {each.region}</h6></center>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <NavLink to={`/country/${each.name.common}`}>
                  <button className="view-more-button">View more</button>
                </NavLink>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Custom Pagination Controls */}
        <div className="pagination">
          <button onClick={paginatePrev} className="page-link" disabled={currentPage === 1}>
            Previous
          </button>
          <span className="page-number">Page {currentPage} of {Math.ceil(filteredUsersBySearch.length / countriesPerPage)}</span>
          <button onClick={paginateNext} className="page-link" disabled={currentPage === Math.ceil(filteredUsersBySearch.length / countriesPerPage)}>
            Next
          </button>
        </div>
      </center>
    </div>
  );
};

export default SearchCountry;
