import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import styles from './FilmsPage.module.scss';
import CardHandler from './components/CardHandler';
import { Input, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function MovieData() {
  const [filmsData, setFilmsData] = useState([]);
  const { id } = useParams();
  const movieId = id;

  var getApiRequest = title => {
    console.log('id: ' + movieId);
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/' + movieId,
      params: { api_key: 'b1039975e8b3741cdafd37bbf1ab2720' },
    };

    axios
      .request(options)
      .then(function (response) {
        setFilmsData(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log(title);
  };

  return (
    <>
      <Container>
        <div className={styles.searchBar}>
          <TextField
            fullWidth
            autoFocus
            variant="filled"
            placeholder="Search..."
            onChange={e => getApiRequest(e.target.value)}
          />
        </div>
        <Row>
          {filmsData &&
            filmsData.map(filmData => {
              return (
                <CardHandler
                  id={filmData.id}
                  title={filmData.title}
                  filmId={filmData.id}
                  date={filmData.release_date}
                  image={filmData.poster_path}
                />
              );
            })}
        </Row>
      </Container>
    </>
  );
}
