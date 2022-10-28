import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Main from "../../LayOut/Main/Main";
import Card from "../../Pages/AllCourses/Card/Card";
import Courses from "../../Pages/AllCourses/Courses/Courses";
import CoursesSummaryCard from "../../Pages/AllCourses/CourseSummaryCard/CoursesSummaryCard";
import Checkout from "../../Pages/Checkout/Checkout";
import CoursesCategoris from "../../Pages/CoursesCategories/CoursesCategoris";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/register',
            element: <Register></Register>
        }, 
        {
            path: '/blog',
            element: <Blog></Blog>
        }
        
    ]
},
{
    path: '/courses',
    element: <Courses></Courses>,
    children: [
        {
            path:'/courses',
            element: <Card></Card>,
            loader: () => fetch('https://computer-eduo-auth-server.vercel.app/coursesNews')
        },
        {
            path: '/courses/:id',
            element: <CoursesCategoris></CoursesCategoris>,
            loader: ({params}) => fetch(`https://computer-eduo-auth-server.vercel.app/course/${params.id}`)
        },
        {
            path: '/coursesNews/:id',
            element: <CoursesSummaryCard></CoursesSummaryCard>,
            loader: ({params}) => fetch(`https://computer-eduo-auth-server.vercel.app/coursesNews/${params.id}`)
        },
        {
            path: '/courses/checkout/:id',
            element: <PrivateRoute> <Checkout></Checkout></PrivateRoute>,
            loader: ({params})=> fetch(`https://computer-eduo-auth-server.vercel.app/courses/checkout/${params.id}`)
        }
       
    ]
},
{
    path: '*',
    element: <ErrorPage></ErrorPage>
}

])