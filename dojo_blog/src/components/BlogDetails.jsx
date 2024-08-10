import { Link, useNavigate, useParams } from 'react-router-dom';
import useFetch from "../useFetch";

const BlogDetails = () => {
    //to get parameters from route path url
    const {id} = useParams()
    const history = useNavigate();
    console.log(id)
    const {data:blog, isPending, error, changeData} = useFetch('http://localhost:8000/blog/'+id);
    const handleDelete = ()=>{
        fetch('http://localhost:8000/blog/'+blog.id,{
            method:"DELETE"
        }).then(()=>{
            history.push("/");
        })
    }
    console.log(blog)
    return ( 
        <div className="blog-details">
            {isPending && <div>...Loading</div>}
            {error && <div>{error}</div>}
            {blog && 
            (
                <article>
                    <h2>{blog.title}</h2>
                    <p><strong>Written by {blog.author}</strong></p>
                    <div>{blog.body}</div> 
                    <button onClick={() => handleDelete(id)}>Delete</button>
                    <Link to="/">Back</Link>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;
