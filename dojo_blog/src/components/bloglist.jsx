import { Link } from 'react-router-dom';

const BlogList = (props) => {
    const blog = props.blogs
    //define function in parent component so that state can be changes as well and send 
    // function to child as props

    return (
        <div className="blog-list">
            <h1>{props.title}</h1>
            {blog.map((i) => (
                <div className="blog-preview">
                    <Link to={`/blog/${i.id}`}>
                        <div key={i.id}>
                            <h3>{i.title}</h3>
                            <p>Written by {i.author}</p>
                        </div>
                    </Link>
                    <button onClick={() => props.handleDelete(i.id)}>Delete</button>
                </div>
            )
            )}
        </div >
    );
}

export default BlogList;
