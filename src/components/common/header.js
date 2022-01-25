import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from './tmdb.svg';

function Header(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="md" className={styles.navbar}>
      <Navbar.Brand href="/" className={styles.logo}>
        <Logo />
      </Navbar.Brand>
    </Navbar>
  );
}
export default Header;
