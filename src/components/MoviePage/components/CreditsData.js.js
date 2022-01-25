import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import axios from 'axios';
import { Input, TextField } from '@mui/material';
import styles from './CreditsData.module.scss';
import { useParams } from 'react-router-dom';

export default function CreditsData() {
  const [persons, setPersons] = useState([]);
  const { id } = useParams();
  const movieId = id;

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/' + movieId + '/credits',
      params: { api_key: 'b1039975e8b3741cdafd37bbf1ab2720' },
    };
    axios
      .request(options)
      .then(function (response) {
        setPersons(response.data.cast);
        console.log(response.data.cast);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <Row>
      {persons &&
        persons.slice(0, 10).map(personData => {
          return (
            <Col>
              <Nav.Link href={'/actor/' + personData.id} bgimage={personData.profile_path}>
                <div className={styles.castCard}>
                  <div
                    style={{
                      height: '300px',
                      width: '200px',
                      backgroundImage: `url(https://image.tmdb.org/t/p/w200/${personData.profile_path})`,
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className={styles.personCard}>
                      <div className={styles.personInfo}>
                        <h3 className={styles.personData}>{personData.name}</h3>
                        <h4 className={styles.personData}>{personData.character}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Nav.Link>
            </Col>
          );
        })}
    </Row>
  );
}
