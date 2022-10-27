import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sideVarCoursesNam.css';

const SideVarCourseName = () => {


const [coursesInfo,setCoursesInfo] = useState([]);    

useEffect( () =>{
    fetch('http://localhost:5000/all-curseName')
    .then(res => res.json())
    .then(data =>setCoursesInfo(data))
} , [])

    return (
        <div>
           <h2>Programming Language</h2>
           {
            coursesInfo.map(course => 
            <p  key={course.id}>
                <Link className='course-link' to={`/courses/${course.id}`}>
                <span className='courses-name'>{course.name}</span>
                </Link>
            </p>)
           }
        </div>
    );
};

export default SideVarCourseName;