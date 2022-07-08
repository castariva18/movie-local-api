import { Col, Row, Container,Button } from "react-bootstrap";

const  IntroPage = () => {
    return(
        <Container className="intro text-white text-center d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                <div className="title mt-4">Entertain you</div>
                <div className="subtitle">with different things every day</div>
                <div className="introButton mt-4 text-center">
                <Button className="btn-lg" variant="dark" href="#action">View list</Button>
                </div>
                </Col>
            </Row>
        </Container>
    )

}
export default IntroPage;