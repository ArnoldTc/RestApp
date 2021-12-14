import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './FilmsPage.module.scss';
import CardHandler from './components/CardHandler';
import { TextField } from '@material-ui/core';
import Header from '../common/header';

export default function FilmsPage() {
  const schema = yup.object().shape({
    title: yup.string(),
  });

  const [filmsData, setFilmsData] = useState([]);
  const [arrayError, setArrayErro] = useState('');

  var getApiRequest = (title) => {
    var options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/find',
      params: { q: title },
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': '6954c35583msh850c667a5c66428p13f004jsndafdf158cd4f',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setArrayErro('');
        setFilmsData(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div>
      <Header link="/cars" type="Autó" now="Film" />
      <Container>
        <div className={styles.form}>
          <Formik
            validationSchema={schema}
            onSubmit={async (values) => {
              await getApiRequest(values.title)
            }}
            initialValues={{
              title: '',
            }}
          >
            {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <div className={styles.searchBar}>
                  <Col md="2">
                    <Form.Group controlId="formtitle">
                      <TextField
                        id="standard-basic"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        label="Cím"
                      />
                    </Form.Group>
                  </Col>
                </div>
                <Button type="submit">Keresés</Button>
                <p>{arrayError}</p>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
      <Container>
        <Row>
          {filmsData &&
            filmsData.map(filmData => {
              return (
                <CardHandler
                  id={filmData.id}
                  title={filmData.title}
                  year={filmData.year}
                  runningTimeInMinutes={filmData.runningTimeInMinutes}
                  titleType={filmData.titleType}
                  numberOfEpisodes={filmData.numberOfEpisodes}
                  seriesStartYear={filmData.seriesStartYear}
                  seriesEndYear={filmData.seriesEndYear}
                />
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
