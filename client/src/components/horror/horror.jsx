import { Col, Row, Container, Card, Image } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListHorrorMovie } from "../../actions/horror";

function HorrorPage () {

    const { getListHorrorMovieResult, getListHorrorMovieLoading, getListHorrorMovieError } =
      useSelector((state) => state.HorrorMovieReducer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      console.log("1. Didmount");
      dispatch(getListHorrorMovie());
    }, [dispatch]);
  
    return (
        <div>
      <Container >
      <br />
        <h1 className="subtitle text-white mt-4 mb-2" id="horror">HORROR MOVIES</h1>
        <br />
        <br />
        <Row>
        {getListHorrorMovieResult ? (
        getListHorrorMovieResult.map((movie) => {
          return(
          <Col md={4} className="movieWrapper mt-2" key={movie.id}>
            <Card className="movieImage">
              <Image src={`${movie.img}`} alt={`${movie.title}`} className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center text-white">{movie.title}</Card.Title>
                  <Card.Text className="text-left text-warning">
                    Genre: {movie.genre}
                    <br/>
                    Duration: {movie.duration}
                  </Card.Text>
                  <Card.Text className="text-left text-white">
                    {movie.description}
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          );
        })
        ) : getListHorrorMovieLoading ? (
          <p>Loading</p>
        ) : (
          <p>{getListHorrorMovieError ? getListHorrorMovieError : "data kosong"}</p>
        )}
          </Row>
          </Container>
          </div>
    )
}

export default HorrorPage;