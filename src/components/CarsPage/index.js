import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './CarsPage.module.scss';
import CardHandler from './components';
import { NativeSelect, TextField } from '@material-ui/core';
import Header from '../common/header';

export default function CarsPage() {
  const schema = yup.object().shape({
    make: yup.string(),
    model: yup.string(),
    year: yup.string(),
    fuel_type: yup.string(),
    limit: yup.string(),
  });

  const [carsData, setCarsData] = useState([]);
  const [arrayError, setArrayErro] = useState('');

  var getApiRequest = (make, model, year, fuel_type, limit) => {
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
        console.log(response.data);
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
      <Header link="/films" type="Film" now="Autó" />
      <Container>
        <div className={styles.form}>
          <Formik
            validationSchema={schema}
            onSubmit={async values => {
              await getApiRequest(values.make, values.model, values.year, values.fuel_type, values.limit);
            }}
            initialValues={{
              make: '',
              model: '',
              year: '',
              fuel_type: '',
              limit: '',
            }}
          >
            {({ handleSubmit, handleChange, values }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Col md="2" className={styles.cols}>
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
                  <Col className={styles.cols}>
                    <div className={[styles.cols, styles.inputDesign]}>
                      <Form.Group controlId="formMake">
                        <TextField
                          id="standard-basic"
                          name="model"
                          value={values.model}
                          onChange={handleChange}
                          label="Típus"
                        />
                      </Form.Group>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className={styles.selectSections}>
                    <Col md="3" className={styles.cols}>
                      <Form.Group controlId="formMake">
                        <Form.Label>
                          <div className={styles.titles}>Évjárat</div>
                        </Form.Label>
                        <NativeSelect aria-label="Floating label select example" name="year" onChange={handleChange}>
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
                        </NativeSelect>
                      </Form.Group>
                    </Col>
                    <Col md="3" className={styles.cols}>
                      <Form.Group controlId="formMake">
                        <Form.Label>
                          <div className={styles.titles}>Üzemanyag</div>
                        </Form.Label>
                        <NativeSelect
                          aria-label="Floating label select example"
                          name="fuel_type"
                          value={values.fuel_type}
                          onChange={handleChange}
                        >
                          <option value={''}>select</option>
                          <option value={'gas'}>Benzin</option>
                          <option value={'diesel'}>Dízel</option>
                          <option value={'electricity'}>Elektromos</option>
                        </NativeSelect>
                      </Form.Group>
                    </Col>
                  </div>
                  <div className={styles.selectSections}>
                    <Col md="3" className={styles.cols}>
                      <Form.Label>
                        <div className={styles.titles}>Hajtás</div>
                      </Form.Label>
                      <NativeSelect aria-label="Floating label select example" name="drive">
                        <option value={''}>select</option>
                        <option value={'fwd'}>fwd</option>
                        <option value={'rwd'}>rwd</option>
                        <option value={'awd'}>awd</option>
                        <option value={'4wd'}>4wd</option>
                      </NativeSelect>
                    </Col>
                    <Col md="3" className={styles.cols}>
                      <Form.Group controlId="formMake">
                        <Form.Label>
                          <div className={styles.titles}>Lista hossza</div>
                        </Form.Label>
                        <NativeSelect aria-label="Floating label select example" name="limit" onChange={handleChange}>
                          <option value={'5'}>5</option>
                          <option value={'10'}>10</option>
                          <option value={'20'}>20</option>
                          <option value={'30'}>30</option>
                        </NativeSelect>
                      </Form.Group>
                    </Col>
                  </div>
                </Row>
                <Button type="submit">Keresés</Button>
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
              var city_liter = 100 / (carData.city_mpg * 0.425);
              var highway_liter = 100 / (carData.highway_mpg * 0.425);
              var combination_liter = 100 / (carData.combination_mpg * 0.425);
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
