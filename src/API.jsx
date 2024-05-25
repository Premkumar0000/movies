import React, { useState, useEffect } from 'react';
import './App.css';

const API = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState({
    name: 'Avengers',
    image: { medium: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHSNiIcD6zCZHs4EzTAJOq0PXAqexDCwPKckxzBqsPg&s' },
    summary: 'Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU).',
    genres: ['Action', 'wars'],
    rating: { average: 7.5 }
  });

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
      const data = await response.json();
      if (data && data.length > 0) {
        setSearchResult(data[0].show);
      } else {
        setSearchResult(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form className="form-inline my- my-lg-0" style={{ justifyContent: 'center' }} onSubmit={handleSubmit}>
        <div className="input-group" style={{ position: 'relative' }}>
          <input
            className="form-control custom-search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="input-group-text" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none' }}>
            <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <i className="fa-solid fa-magnifying-glass" style={{ color: 'yellow' }}></i>
            </button>
          </span>
        </div>
      </form>

      <div className="result">
        {searchResult ? (
          <>
            <div>
              <img src={searchResult.image ? searchResult.image.medium : ''} alt={searchResult.name} />
            </div>
            <div className="result-content">
              <h2>{searchResult.name}</h2>
              {searchResult.summary && <div dangerouslySetInnerHTML={{ __html: searchResult.summary }} />}
              {searchResult.genres && <p>Genres: {searchResult.genres.join(', ')}</p>}
              {searchResult.rating && <p>Rating: {searchResult.rating.average}</p>}
            </div>
          </>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default API;
