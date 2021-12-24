import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';

function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* navbar */}
      <Nav></Nav>
      {/* hero  */}
      <Header></Header>
      {/* bunch of rows */}
    </div>
  )
}

export default HomeScreen
