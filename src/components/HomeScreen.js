import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Row from './Row';
import request from '../api call/request';
function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* navbar */}
      <Nav></Nav>
      {/* hero  */}
      <Header></Header>
      {/* bunch of rows */}
      <Row title={'NETFLIX ORIGINALS'} fetchURL={request.fetchNetflixOriginals} isLongPoster></Row>
      <Row title={'Trending Now'} fetchURL={request.fetchTrending}></Row>
      <Row title={'Top Rated'} fetchURL={request.fetchTopRated}></Row>
      <Row title={'Action Movies'} fetchURL={request.fetchActionMovies}></Row>
      <Row title={'Comedy Movies'} fetchURL={request.fetchComedyMovies}></Row>
      <Row title={'Horror Movies'} fetchURL={request.fetchHorrorMovies}></Row>
      <Row title={'Romance Movies'} fetchURL={request.fetchRomanceMovies}></Row>
      <Row title={'Documentaries'} fetchURL={request.fetchDocumentaries}></Row>
    </div>
  )
}

export default HomeScreen
