import React from 'react';
import { Link } from 'react-router-dom';
const Otherpage = ({ title, content }) => (
    <div className="max-w-7xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600">{content}</p>
        <Link to="/" className="text-red-600 hover:underline mt-6 block">
            Go back to Home
        </Link>
    </div>
);
export default Otherpage ;