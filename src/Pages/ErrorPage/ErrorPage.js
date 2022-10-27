import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='error'>
            <div>
            <h1>Sorry !!!</h1>
            <p>Page Can not Found !!</p>
            <Link to='/'>Go To Home Page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;