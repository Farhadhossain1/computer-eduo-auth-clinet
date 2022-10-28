import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../CourseCard/CourseCard';
import './Card.css';

const Card = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h2 className='text-center my-3'>Check Our Courses !!</h2>
               <div className='card-container'>
               {
                    courses.map(course =><CourseCard key={course._id} course={course}></CourseCard>)
                }
               </div>
        </div>
    );
};

export default Card;