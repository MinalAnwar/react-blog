import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

// this wrapping with Router is because it ensures that all components inside App will have access to the BrowserRouter
// npx json-server --watch data/db.json --port 8000 use this to use json server
function App() {
  // var heading = "Welcome Minal"
  // check useState cleanup function to remove the error of not fetching when we switch to another component immediately before fetch
  // route parameter /blog/1 shows blog with id 1 where 1 is the parameter
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* where page content will go when navigating to other pages, this needs Routes */}
          <Routes>
            {/* this ensures that the user will see this component when navigating to this path. "exact" is used for complete matching; if it matches exactly, then the corresponding component will render */}
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/createblog" element={<CreateBlog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
