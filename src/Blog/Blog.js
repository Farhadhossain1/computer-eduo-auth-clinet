import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <div>
            <h2>what is cors?</h2>
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>
            </div>
        </div>
    );
};

export default Blog;