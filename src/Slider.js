
import {Container, Row,Col} from 'react-bootstrap';

export default function Slider()
{
    return(
         <Container fluid>
            <Row className='slider'>
            <Col>

            <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={require('./slider1.png')} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={require('./slide2.png')} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={require('./slide4.png')} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </Col>
            </Row>
         </Container>
    )
}