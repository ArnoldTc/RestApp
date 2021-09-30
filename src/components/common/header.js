import React, { useState } from 'react';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.scss';

export default function Header(props) {
  return (
    <div className={styles.headerSection}>
      <Container className={styles.navbar}>
        <Navbar.Brand href="/">
          <div className={styles.brand}>Mit szeretnél?</div>
        </Navbar.Brand>
        <div className={styles.navLine}>
          <div className={styles.sideTitle}>{props.now} Keresése</div>
          <Nav.Link className={styles.rightButton} href={props.link}>
            <div className={styles.navLink}>{props.type} Keresése</div>
          </Nav.Link>
        </div>
      </Container>
    </div>
  );
}
