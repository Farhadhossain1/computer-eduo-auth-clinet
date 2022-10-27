import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../../Share/Header/Header';
import SideVarCourseName from '../../Share/SideVarCourseName/SideVarCourseName';
const Courses = () => {
    return (
        <div>
            <Header></Header>
                <Container>
                    <Row>
                        <Col lg="4">
                            <SideVarCourseName></SideVarCourseName>
                        </Col>
                        <Col lg="8">
                        <Outlet></Outlet>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default Courses;