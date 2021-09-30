import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './CardHandler.module.scss';

export default function CardHandler(props) {
  return (
    <Col md="4">
      <div key={props.id}>
        <div className={styles.cardBorder}>
          <Col>
            <h2>{props.make}</h2>
            <div className={styles.subTitle}>
              <h4>{props.model}</h4>
              <h5>{props.year}</h5>
            </div>
          </Col>
          <div className={styles.contentBorder}>
            <Row>
              <Col md="5">
                <div className={styles.infoTitle}>
                  <p>Általános info</p>
                </div>
              </Col>
              <Col>
                <div>
                  <p>Üzemanyag: {props.fuel_type}</p>
                  <p>Kiviel: {props.class}</p>
                  <p>Hengerek száma: {props.cylinders}</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.contentBorder}>
            <Row>
              <Col md="5">
                <div className={styles.infoTitle}>
                  <p>Fogyasztás 100km/L</p>
                </div>
              </Col>
              <Col>
                <p>Városi: {parseFloat(props.city_liter).toFixed(2)} L</p>
                <p>Országút: {parseFloat(props.highway_liter).toFixed(2)} L</p>
                <p>Kombinált: {parseFloat(props.combination_liter).toFixed(2)} L</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Col>
  );
}
