import { Col, Row, Container,Button } from "react-bootstrap";

const  IntroPage = () => {
    return(
        <div className="intro mt-4">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                <br/>
                <br/>
                <div className="title mt-4">Entertain you</div>
                <br/>
                <div className="subtitle">with different things every day</div>
                <br/>
                <div className="introButton mt-4 text-center">
              <Button className="btn-lg" variant="dark" href="#action">View list</Button>
            </div>
                </Col>
            </Row>
        </Container>
        </div>
    )

}
export default IntroPage;