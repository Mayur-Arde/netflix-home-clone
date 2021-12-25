import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Row from './Row';
import request from '../api call/request';
function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* navbar */}
      <Nav></Nav>
      {/* hero  */}
      <Header></Header>
      {/* bunch of rows */}
      <Row
        title={'NETFLIX ORIGINALS'}
        fetchURL={request.fetchNetflixOriginals}
        isLongPoster
        id={'NO'}
      ></Row>
      <Row
        title={'Trending Now'}
        fetchURL={request.fetchTrending}
        id="TN"
      ></Row>
      <Row title={'Top Rated'} fetchURL={request.fetchTopRated} id={'TR'}></Row>
      <Row
        title={'Action Movies'}
        fetchURL={request.fetchActionMovies}
        id={'AM'}
      ></Row>
      <Row
        title={'Comedy Movies'}
        fetchURL={request.fetchComedyMovies}
        id={'CM'}
      ></Row>
      <Row
        title={'Horror Movies'}
        fetchURL={request.fetchHorrorMovies}
        id={'HM'}
      ></Row>
      <Row
        title={'Romance Movies'}
        fetchURL={request.fetchRomanceMovies}
        id={'RM'}
      ></Row>
      <Row
        title={'Documentaries'}
        fetchURL={request.fetchDocumentaries}
        id={'D'}
      ></Row>
    </div>
  );
}

export default HomeScreen;
