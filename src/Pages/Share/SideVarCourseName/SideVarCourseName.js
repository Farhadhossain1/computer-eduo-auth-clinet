import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideVarCourseName = () => {


const [coursesInfo,setCoursesInfo] = useState([]);    

useEffect( () =>{
    fetch('http://localhost:5000/all-curseName')
    .then(res => res.json())
    .then(data =>setCoursesInfo(data))
} , [])

    return (
        <div>
           <h1>Courses Name: {coursesInfo.length}</h1>
           {
            coursesInfo.map(course => 
            <p key={course.id}>
                <Link to={`/courses/${course.id}`}>
                {course.name}
                </Link>
            </p>)
           }
        </div>
    );
};

export default SideVarCourseName;