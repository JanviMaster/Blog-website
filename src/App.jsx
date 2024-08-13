import './App.css';
import Footer from './components/Footer'; 
import CreateBlog from './components/CreateBlog'; 
import BlogPostCard from './components/BlogPostCard';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import Home from './pages/Home';

function App() {
  return (
  <>
    <div className="App">
      
      <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
        <BlogPostCard/> 
        <CreateBlog/>
      
       <BlogPage/>
       <Home/>
       <Footer/>
      </Router>
      
     </div>
     </> 
  );
}

export default App;