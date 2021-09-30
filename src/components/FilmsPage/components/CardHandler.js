import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './CardHandler.module.scss';

export default function CardHandler(props) {
  const howMuch = () => {
    if (props.numberOfEpisodes != undefined) {
      return (
        <h5>
          Epizódok száma:
          <br />
          {props.numberOfEpisodes}
        </h5>
      );
    } else {
      return;
    }
  };
  const hasHossz = () => {
    if (props.runningTimeInMinutes != undefined) {
      return (
        <h5>
          Hossz:
          <br />
          {props.runningTimeInMinutes}
        </h5>
      );
    } else {
      return;
    }
  };
  const whatType = () => {
    if (props.titleType != undefined) {
      return (
        <h5>
          Műfaj:
          <br />
          {props.titleType}
        </h5>
      );
    } else {
      return;
    }
  };
  const hasEpisode = () => {
    if (props.seriesStartYear != undefined && props.seriesEndYear != undefined) {
      return (
        <h5>
          Epizódok:
          <br />
          {props.seriesStartYear} - {props.seriesEndYear}
        </h5>
      );
    } else if (props.seriesStartYear != undefined) {
      return (
        <h5>
          Epizódok:
          <br />
          {props.seriesStartYear}
        </h5>
      );
    } else {
      return;
    }
  };
  return (
    <Col md="6">
      <div key={props.id}>
        <div className={styles.cardBorder}>
          <Col>
            <h3>{props.title}</h3>
            <div className={styles.subTitle}>
              {howMuch()}
              {hasEpisode()}
              {whatType()}
              {hasHossz()}
            </div>
          </Col>
        </div>
      </div>
    </Col>
  );
}
