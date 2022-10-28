import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
            <div>
               <div  className='home'>
               <div>
                <h1>Learn How To Code And Build Skills in <span> Programming</span></h1>
                <Link to='/courses'><button className='btn-home bg-primary'>See Courses</button></Link>
               </div>
               <div>
                <img className='w-100' src="https://img.freepik.com/premium-vector/web-development-programming-laptop-smartphone_73903-163.jpg?size=626&ext=jpg&ga=GA1.2.2130322680.1666962494&semt=sph" alt="" />
               </div>
               </div>
            </div>
    );
};

export default Home;