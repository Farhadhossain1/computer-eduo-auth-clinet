import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <div className='text-container'>
            <h2 className='question'>what is cors?</h2>
            <p className='text'>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others. CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.</p>
            </div>
            <div className='text-container'>
                <h2 className='question'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='text'>To go along with the current flow of technological development, every developer wants to build great apps, that will serve as business solutions. If you are one of them, then come on, you are in the right place. For this time, I am going to help you discover the features and benefits of Firebase to help take your mobile app a notch higher. As a result, you'll understand which backend development solution works better for you, depending on your specific requirements, and the product type (final product, MVP, prototype).
                Firebase is a toolkit and infrastructure that aims at supporting the process of building better applications and growing a successful business. This technique continues to innovate and dominate the BaaS (Backend as a Service) market. Along with the time, it has grown so much that it has become a key component of Google mobile strategy. It was bought by Google and now it is being constantly improved in order to make the user experience much more convenient and productive.</p>
      </div>
      <div className='text-container'>
        <h2 className='question'>How does the private route work?</h2>
        <p className='text'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
        The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.Public routes are Log in, SignUp, Forgot Password, Reset Password. In simple words, These routes can be accessed before login into the App.
        </p>
      </div>
      <div className='text-container'>
        <h2 className='question'>What is Node? How does Node work?</h2>
        <p className='text'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
      </div>
        </div>
    );
};

export default Blog;