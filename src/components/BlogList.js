import { Link } from 'react-router-dom';

function BlogList({ title, blogs }) {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.length ? (
                    blogs.map((blog) => {
                        return (
                            <div className="blog-preview" key={blog.id}>
                                <Link to={`/blogs/${blog.id}`}>
                                    <h2>{blog.title}</h2>
                                    <p>Written by : {blog.author}</p>
                                </Link>
                            </div>
                        );
                    })
                ) : (

                    <div>No Blogs yet...</div>

                )
            }
        </div>
    );
}

export default BlogList;