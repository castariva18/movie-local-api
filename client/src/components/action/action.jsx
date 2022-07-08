import { Col, Row, Container, Card, Image } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListActionMovie } from "../../actions/action";

function ActionPage () {

  const { getListActionMovieResult, getListActionMovieLoading, getListActionMovieError } =
    useSelector((state) => state.ActionMovieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1. Didmount");
    dispatch(getListActionMovie());
  }, [dispatch]);

    return (
      
      <Container className="py-4">
        <h1 className="subtitle text-white my-4" id="action">ACTION MOVIES</h1>
        <Row>
        {getListActionMovieResult ? (
        getListActionMovieResult.map((movie) => {
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
        ) : getListActionMovieLoading ? (
          <p>Loading</p>
        ) : (
          <p>{getListActionMovieError ? getListActionMovieError : "data kosong"}</p>
        )}
          </Row>
          </Container>
    )
}

export default ActionPage;