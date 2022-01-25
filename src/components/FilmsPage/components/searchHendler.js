import React, { useState } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';
import { TextField } from '@material-ui/core';

export default function Searching() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { API_KEY } = '6954c35583msh850c667a5c66428p13f004jsndafdf158cd4f';
  const API_URL = 'https://imdb8.p.rapidapi.com/title/find';

  const getInfo = () => {
    var options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/find',
      params: { q: query },
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': '6954c35583msh850c667a5c66428p13f004jsndafdf158cd4f',
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setResults(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleInputChange = query => {
    setQuery(query);
    if (query && query.length > 1) {
      if (query.length % 2 === 0) {
        getInfo();
        console.log(query);
      }
    } else if (!query) {
    }
  };

  return (
    <form>
      <input type="text" onChange={e => handleInputChange(e.target.value)} />
      <Suggestions results={results} />
    </form>
  );
}
