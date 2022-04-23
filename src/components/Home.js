import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const title = "All Blogs!"

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    // You can either declare 'blogs' as an empty array (i.e []) to avoid using '&&' in the jsx
    // OR you can just use '&&' in the jsx to check if 'blogs' is still null if you declare it so
    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList title={title} blogs={blogs} />}
        </div>
    );
}

export default Home;