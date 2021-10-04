import React from 'react';

const NotFound = () => {
    return (
        <div>
            {/* page not found section */}
            <div className="mt-5">
                <h1>404</h1>
                <h5>page not found</h5>
            </div>
            <button type="button" className="btn btn-primary mb-5">Back Home</button>
        </div>
    );
};

export default NotFound;