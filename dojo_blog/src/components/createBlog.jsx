import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState('Mario');
    const [Pending, setPending] = useState(false);
    //use to redirect to history from where we came -1 means go 1 place back
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setPending(true);
        setTimeout(() => {
            fetch("http://localhost:8000/blog", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog) //convert obj to json string

            }).then(() => {
                console.log('new blog added');
                setPending(false);
                // to go 1 place back to use history prevent default is imp it will work according to us then
                // history.go(-1);
                history.push("/");
            })
        }, 800);
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Blog Body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yohsi</option>
                </select>
                {!Pending && <button>Add Blog</button>}
                {Pending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default CreateBlog;

