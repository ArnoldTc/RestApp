import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import styles from './IndexPage.module.scss';

export default function IndexPage() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
        <Nav defaultActiveKey="/" className={styles.navBox}>
          <div className={styles.navList}>
            <Row>
              <Navbar.Brand href="/">
                <div className={styles.brand}>
                  <h2>Mit szeretnél?</h2>
                </div>
              </Navbar.Brand>
            </Row>
            <Row md="10" className="justify-content-center">
              <Col md="4">
                <Nav.Link href="/films">
                  <div className={styles.navLink}>
                    <h2>Film keresése...</h2>
                  </div>
                </Nav.Link>
              </Col>
              <Col md="4">
                <Nav.Link href="/cars">
                  <div className={styles.navLink}>
                    <h2>Autó keresése...</h2>
                  </div>
                </Nav.Link>
              </Col>
            </Row>
          </div>
        </Nav>
      </Navbar>
    </Container>
  );
}
