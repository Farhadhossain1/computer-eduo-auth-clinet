import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCard from '../CourseSummaryCard/CoursesSummaryCard';

const Card = () => {
    const coursesCards = useLoaderData()
    return (
        <div>
            <h1>It is card Components : {coursesCards.length}</h1>
                {
                    coursesCards.map( courseCard => <CoursesSummaryCard 
                    key = {courseCard._id}
                    courseCard={courseCard}
                    >
                    </CoursesSummaryCard>)
                }
        </div>
    );
};

export default Card;