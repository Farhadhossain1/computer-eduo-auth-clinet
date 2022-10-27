import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCard from '../AllCourses/CourseSummaryCard/CoursesSummaryCard';

const CoursesCategoris = () => {
    const courseNews = useLoaderData();
    return (
        <div>
            <h1>This is category news: {courseNews.length}</h1>
            {
                courseNews.map( courseCard => <CoursesSummaryCard
                key={courseCard._id}
                courseCard = {courseCard}
                ></CoursesSummaryCard>)
            }
        </div>
    );
};

export default CoursesCategoris;