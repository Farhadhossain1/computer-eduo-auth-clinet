import jsPDF from 'jspdf';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './CoursesSummaryCard.css';


const CoursesSummaryCard = ({courseCard}) => {
    const {title, details,_id,image_url,rating } = courseCard;


    const pdfGenerate = () => {
        let doc = new jsPDF("landscape", "px", "a4", "true");
        doc.text(200, 170, title);
        doc.text(10, 190, details);
        doc.save("Hex Clan pdf file");
      };
  

    return (
        <div>
            <Card className='mb-5' >
                <Card.Header>
                    <div className='card-header'>
                    <button onClick={pdfGenerate} className='btn btn-primary'>Download PDF</button>
                    </div>
                    </Card.Header>
      <Card.Body>
        <Card.Img variant='top' src={image_url} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
                {
                   details.length > 200 ?
                   <p>{details}</p> :
                   <p>{details}</p>
                }
        </Card.Text>
        <div className='icon-btn'>
           <div>
           <FaStar className='text-warning'></FaStar>
            <FaStar className='text-warning'></FaStar>
            <FaStar className='text-warning'></FaStar>
            <FaStar className='text-warning'></FaStar>
            <FaStar className='text-warning'></FaStar>
           </div>
           <div>
               <p>Total Member : {rating.number}</p>
           </div>
        </div>
        <Link to={`/courses/checkout/${_id}`}><Button className='btn' variant="primary">Get premium access</Button></Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CoursesSummaryCard;