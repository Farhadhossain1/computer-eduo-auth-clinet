import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col lg='6'>
                    <div>
                    <h1>Programming Languages Info</h1>
                    </div>
                </Col>
                <Col>
               <div>
                       <Image src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.codingdojo.com%2Fblog%2Fwp-content%2Fuploads%2FTop-Programming-Languages-of-2022.jpg&imgrefurl=https%3A%2F%2Fwww.codingdojo.com%2Fblog%2Ftop-programming-languages&tbnid=LjI2hz9-o_aFPM&vet=10CFQQMyj1AWoXChMI8MP6p5f_-gIVAAAAAB0AAAAAEAQ..i&docid=fn0vEiFun4nuiM&w=800&h=533&q=programming%20languages%20img&hl=en&ved=0CFQQMyj1AWoXChMI8MP6p5f_-gIVAAAAAB0AAAAAEAQ'></Image>
               </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;