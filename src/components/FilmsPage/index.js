import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import styles from './FilmsPage.module.scss';
import CardHandler from './components/CardHandler';
import { Input, TextField } from '@mui/material';

export default function FilmsPage() {
  const [filmsData, setFilmsData] = useState([]);

  var getApiRequest = title => {
    console.log('title: ' + title);
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: { api_key: 'b1039975e8b3741cdafd37bbf1ab2720', query: title },
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
  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
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
  }, []);
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
            filmsData.slice(0, 10).map(filmData => {
              return (
                <Col lg="3">
                  <CardHandler
                    id={filmData.id}
                    title={filmData.title}
                    filmId={filmData.id}
                    date={filmData.release_date}
                    image={filmData.poster_path}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
