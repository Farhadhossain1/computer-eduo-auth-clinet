import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({course}) => {
    console.log(course)
    const {title, details,_id,image_url,rating, category_id
    } = course;
    return (
        <div  className='course-card text-decoration-none'>
            <Link to={`/courses/${category_id}`}>
            <div>
               <img src={image_url}  alt="" />
               <h5>{title}</h5>
               <p><small>{details.slice(0, 200)}......</small></p>
            </div>
            </Link>
        </div>
    );
};

export default CourseCard;