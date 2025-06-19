import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/Extra img/ShainaLogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Home" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Home')}>Home</Nav.Link>
              <Nav.Link href="#Skills" className={activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Skills')}>Skills</Nav.Link>
              <Nav.Link href="#Projects" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/shaina-duran-0a76b036b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/shaina.alien"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/shainaaaa.alien/"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#Connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
