'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Contact from './Contact';

const Navigation = ({ medal, transparent = true }: { medal: any, transparent: boolean }) => {

  return <div className="w3-top">
    <Contact />
    <Navbar expand="lg" className={`heading ${transparent ? 'nav-bar-transparent' : ''}`}>
      <Container className={`w3-bar d-flex`}>
        <Link style={{ height: 40 }} href="/" className="d-flex align-self-center">
          <img alt="Challenge Sports" src={(medal && medal.id) ? medal.Medal : "/images/logos/logo_white.png"} className="align-self-center h-100" />
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3 d-flex" style={{ fontSize: '13px' }}>
            <Link href="/" className="ms-auto selected">Home</Link>
            <Link href="/whats_new" >What's New</Link>
            <Link href="/tournaments" >Tournaments</Link>
            <Link href="/passport" >Passport</Link>
            <Link href="/rankings" >Rankings</Link>
            <Link href="/alumni" >Alumni</Link>
            <Link href="/information" >Information</Link>
            <Link href="/contact" >Contact</Link>
            <Link href="/faq" >FAQ</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
}
export default Navigation;