import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './ApiHandler.module.scss';
import CardHandler from '../cardHandler';
import { Select, TextField } from '@material-ui/core';

export default function ApiHandler() {
  const schema = yup.object().shape({
    make: yup.string(),
    model: yup.string(),
    year: yup.string(),
    fuel_type: yup.string(),
    limit: yup.string(),
  });

  const [carsData, setCarsData] = useState([]);
  const [makeData, setMakeData] = useState([]);

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState();
  const [fuel_type, setFuel_type] = useState();
  const [limit, setLimit] = useState();
  const [arrayError, setArrayErro] = useState('Keresés..');

  {
    /*
  var getApiMakeHelper = () => {
    var options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: { make: make },
      headers: {
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
        'x-rapidapi-key': '6954c35583msh850c667a5c66428p13f004jsndafdf158cd4f',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMakeData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };*/
  }
  var getApiRequest = () => {
    var options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: { make: make, model: model, year: year, fuel_type: fuel_type, limit: limit },
      headers: {
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
        'x-rapidapi-key': '6954c35583msh850c667a5c66428p13f004jsndafdf158cd4f',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        if (response.data.length > 0) {
          setArrayErro('');
          setCarsData(response.data);
        } else {
          setArrayErro('Nincs találat');
          setCarsData('');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div>
      <Container>
        <div className={styles.form}>
          <Formik
            validationSchema={schema}
            onSubmit={values => {
              setMake(values.make);
              setModel(values.model);
              setYear(values.year);
              setFuel_type(values.fuel_type);
              setLimit(values.limit);
              getApiRequest();
            }}
            initialValues={{
              make: '',
              model: '',
              year: '',
              fuel_type: '',
              limit: '',
            }}
          >
            {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Col md="2">
                    <Form.Group controlId="formMake">
                      <TextField
                        id="standard-basic"
                        name="make"
                        value={values.make}
                        onChange={handleChange}
                        label="Márka"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formMake">
                      <TextField
                        id="standard-basic"
                        name="model"
                        value={values.model}
                        onChange={handleChange}
                        label="Típus"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Group controlId="formMake">
                      <Form.Label>
                        <div className={styles.titles}>Évjárat</div>
                      </Form.Label>
                      <Select aria-label="Floating label select example" name="year" onChange={handleChange}>
                        <option value={''}>select</option>
                        <option value={'2021'}>2021</option>
                        <option value={'2020'}>2020</option>
                        <option value={'2019'}>2019</option>
                        <option value={'2018'}>2018</option>
                        <option value={'2017'}>2017</option>
                        <option value={'2016'}>2016</option>
                        <option value={'2015'}>2015</option>
                        <option value={'2014'}>2014</option>
                        <option value={'2013'}>2013</option>
                        <option value={'2012'}>2012</option>
                        <option value={'2011'}>2011</option>
                        <option value={'2010'}>2010</option>
                        <option value={'2009'}>2009</option>
                        <option value={'2008'}>2008</option>
                        <option value={'2007'}>2007</option>
                        <option value={'2006'}>2006</option>
                        <option value={'2005'}>2005</option>
                        <option value={'2004'}>2004</option>
                        <option value={'2003'}>2003</option>
                        <option value={'2002'}>2002</option>
                        <option value={'2001'}>2001</option>
                        <option value={'2000'}>2000</option>
                        <option value={'1983'}>1983</option>
                      </Select>
                    </Form.Group>
                  </Col>
                  <Col md="2">
                    <Form.Group controlId="formMake">
                      <Form.Label>
                        <div className={styles.titles}>Üzemanyag</div>
                      </Form.Label>
                      <Select
                        aria-label="Floating label select example"
                        name="fuel_type"
                        value={values.fuel_type}
                        onChange={handleChange}
                      >
                        <option value={''}>select</option>
                        <option value={'gas'}>Benzin</option>
                        <option value={'diesel'}>Dízel</option>
                        <option value={'electricity'}>Elektromos</option>
                      </Select>
                    </Form.Group>
                  </Col>
                  <Col md="2">
                    <Form.Label>
                      <div className={styles.titles}>Hajtás</div>
                    </Form.Label>
                    <Select aria-label="Floating label select example" name="drive">
                      <option value={''}>select</option>
                      <option value={'fwd'}>fwd</option>
                      <option value={'rwd'}>rwd</option>
                      <option value={'awd'}>awd</option>
                      <option value={'4wd'}>4wd</option>
                    </Select>
                  </Col>
                  <Col md="2">
                    <Form.Group controlId="formMake">
                      <Form.Label>
                        <div className={styles.titles}>Lista hossza</div>
                      </Form.Label>
                      <Select aria-label="Floating label select example" name="limit" onChange={handleChange}>
                        <option value={'5'}>5</option>
                        <option value={'10'}>10</option>
                        <option value={'20'}>20</option>
                        <option value={'30'}>30</option>
                      </Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button type="submit">Submit form</Button>
                <p>{arrayError}</p>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
      <Container>
        <Row>
          {carsData &&
            carsData.map(carData => {
              var city_liter = carData.city_mpg * 0.425;
              var highway_liter = carData.highway_mpg * 0.425;
              var combination_liter = carData.combination_mpg * 0.425;
              return (
                <CardHandler
                  id={carData.id}
                  make={carData.make}
                  model={carData.model}
                  year={carData.year}
                  fuel_type={carData.fuel_type}
                  class={carData.class}
                  cylinders={carData.cylinders}
                  city_liter={city_liter}
                  highway_liter={highway_liter}
                  combination_liter={combination_liter}
                />
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
