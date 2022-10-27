import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
            <h1>Welcome Our Course !!</h1>
            <h2>{course.title}</h2>
        </div>
    );
};

export default Checkout;