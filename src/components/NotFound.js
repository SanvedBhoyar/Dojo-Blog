import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>404. Page not found.</p>
            <Link to="/">Go back to Home Page...</Link>
        </div>
    );
}

export default NotFound;