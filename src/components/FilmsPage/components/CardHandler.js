import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './CardHandler.module.scss';
import { Nav } from 'react-bootstrap';

export default function CardHandler(props) {
  return (
      <Nav.Link href={'/movie/' + props.id}>
        <div
          className={styles.card}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300/${props.image})`,
            alt: '',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Col className={styles.shadow}>
            <div className={styles.content}>
              <h3 className={styles.title}>{props.title}</h3>
              <h2 className={styles.date}>{props.date}</h2>
            </div>
          </Col>
        </div>
      </Nav.Link>
  );
}
