
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './components/createBlog';
import BlogDetails from './components/BlogDetails';
//this wraping with router is bcz it known that all things inside app will have access to the browser router
// npx json-server --watch data/db.json --port 8000 use this to use json server
function App() {
  //var heading = "Welcome Minal"
  //check  usestate cleanup function to remove the error of not fetching when we switch in other component immediatly before fetch
  //route parameter  /blog/1 show blog of id 1 only where 1 is parameter
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          {/* where page content will go when go on other page  this  need switch*/}
          <Switch>
            {/* this is for that user will see this compnent when go to this type of path exact for complete matching if completly same then go to that component inside it */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/blog/:id">
              <BlogDetails></BlogDetails>
            </Route>

            <Route exact path="/createblog">
              <CreateBlog></CreateBlog>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
