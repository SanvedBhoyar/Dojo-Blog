import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    const handleClick = async () => {
        await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        });
        console.log('Blog deleted successfully');
        navigate('/');
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;