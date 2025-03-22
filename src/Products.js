import { useState } from 'react';
import {Container, Row,Col} from 'react-bootstrap';


export default function Products ()
 

{


  let[product,setproduct]= useState([
    {
      title :"Apple",
      price :"100",
      desc:"This is best Kashmir Apple",
      img:require('./apple.png')
    },
    {
      title :"Toys",
      price :"500",
      desc:"This is best Car Toys under 5 year old",
      img:require('./car.png')

    },
    {
      title :"Chair",
      price :"750",
      desc:"This is Cusion chair",
      img:require('./chair.png')

    },

    {
      title :"Grape",
      price :"200",
      desc:"This is best Kashmir Grape",
      img:require('./grape.png')

    },
    {
      title :"Bike",
      price :"400",
      desc:"This is best Bike Toys under 5 year old",
      img:require('./bike.png')

    },
    {
      title :"Table",
      price :"2000",
      desc:"This is Cusion Tables",
      img:require('./table.png')

    }
    

  ])
    return(
         <Container fluid>
            <Row>
            <h1 className='bg-primary p-3 text-white'>List of Products</h1>

                <Col>
                
                <div className='row pd' >
                     {product.map((data, index) =>
                     
                      <div className='col-md-4 col-sm-12 products'>
                        <img src={data.img} width={150} height={150}/>
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                        <h2>{data.price}</h2>
                      <button>Add to Cart</button>
                      </div>
                     
                     )}
                </div>

                
              </Col>
            </Row>
         </Container>
    )
}