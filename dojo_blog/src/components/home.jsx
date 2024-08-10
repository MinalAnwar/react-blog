import BlogList from "./bloglist";
import useFetch from "../useFetch";
import { usenavigate } from 'react-router-dom';
const Home = () => {
    // const handleClick = ()=>{
    //     console.log("Hello ninjas")
    // }
    // //how to pass values
    // const handleClickAgain = (name)=>{
    //     console.log("Hello"+name)
    // }
    //need to wrap in anynomus function cuz cannot do it direct if not do this handleClickAgain('Minal') it will just fire 
    //the function when making button and never again on click 


    //STATES HOOKS speacial function when fire reload the component of react that is using a certain value and want to change it at certain event
    
    //making reactive value using useState
    // useState('Minal') invoking function this is assigned to some var to access return value of function
    // to change the state of variable of type usestate we have a single speacial function that we will assign to it
    //setName only this function can be used to change the value
    // const [name,setName] = useState('Minal')
    // const[age,setAge] = useState(20)
    // const handleClick = ()=>{
    //   setName('Maham')
    //   setAge(21)
    // }

    // const [blog,setBlog]=useState(null)
    // //this is a hard coded data if u want to fetch how u will first need the jason server to create fake api to fetch the data
    // //we need to install json server package and run it npx json-server --watch data/db.json --port 8000

    // const [isPending,setPending] = useState(true)
    // const [error,setError] = useState(null)
    
    //any time data change or reload this will run on anytype of render 
    // if want to specify on which render it will run we need to add the second argument 
    // empty will run it on initial render only
    //lets say u want to run this only when the state of name changes 
    // uncomment the code and see that this will run only when name state if rendered
    // useEffect(()=>{
    //     setTimeout(()=>
    //         {
    //         //using this useeffect to fectch data from json file
    //         fetch("http://localhost:8000/blog")
    //         .then(res=>
    //             {
    //                 if(!res.ok)
    //                 {
    //                     throw Error("Could not fetch the data for that resourse")
    //                 }
    //                 return res.json()
    //             })
    //         .then(data=>{
    //             setBlog(data);
    //             setPending(false)
    //         })
    //         .catch(err=>{
    //             setError(err.message)
    //             setPending(false)
    //         })
    //     },1000)
    // },[]) copy this to useFetch.js for custom hook
    //key must have a unique value react keep track if any change it will change frontend
    //blog && we need to check wether blog have data or not id blog empty false and never go ahead
    const history = usenavigate();
    const {data:blog ,isPending,error,changeData} = useFetch("http://localhost:8000/blog")
    const handleDelete = (id)=>{
        const BlogAfterDelete = blog.filter((blog)=>blog.id != id);
        fetch('http://localhost:8000/blog/'+id,{
            method:"DELETE"
        }).then(()=>{
            changeData(BlogAfterDelete)
            history.push("/");
        })
    }
    return (
        <div className="home">
            { error && <div className="error">{error}</div>}
            {isPending && <div className="load">Loading...</div>}
            {blog && <BlogList blogs={blog} title="All Blogs" handleDelete = {handleDelete}></BlogList>}
            {blog && <BlogList blogs={blog.filter((blog)=>blog.author=='Mario')} title="Marios Blogs" handleDelete = {handleDelete}></BlogList>}
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={handleClick} className="btn">Click me</button> */}
            {/* <button className="clickagain" onClick={()=>handleClickAgain('Minal')}>Click me again</button>  */}
        </div>
    );
}
//see custom hook in usefetch
export default Home
