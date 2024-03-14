import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Cart from './Cart'
import { Link } from 'react-router-dom'

export default function Menubar ({ count }) {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container
        style={{
          display: 'flex',
          gap: '60rem',
          paddingRight: '1rem',
          paddingLeft: '1rem'
        }}
      >
        <Navbar.Brand href='/'>E-Commerce</Navbar.Brand>

        <Nav>
          <Link to='/cart'>
            Cart <span>{count}</span>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
