
import { Outlet} from "react-router-dom";
import Footer from "./Footer";
import {Container, Row,Col} from 'react-bootstrap';

                                                   
export default function Header()
{
    return(

        <div>
              <Container fluid>
                <Row className="header">
                       <Col>
                        <img src={require('./logo.png')} width={150} />
                       </Col>
                       <Col>
                       <div className="cart">
                       <img src={require('./cart.png')} width={50} />

                       </div>

                        </Col>
                </Row>

                <Row className="menu">
                      <Col>
                          <ul>
                            <li>Home</li>
                            <li>Product</li>
                            <li>Contact</li>

                          </ul>
                      </Col>
                </Row>

              </Container>




            <Outlet />


            <Footer />

        </div>
    )
}