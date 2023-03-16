import { Routes, Route, Link, NavLink } from "react-router-dom";
import BlogLayout from "./blog";
import Contact from "./Contact";
import Home from "./Home";
import Categories from "./blog/Categories";
import Post from "./blog/Post";
import Blog from "./blog/Blog";
import Page404 from "./blog/404";



function App() {
  return (
<>
<nav>
  <NavLink to="/" className={({ isActive}) => isActive && 'aktif'}>Anasayfa</NavLink>
  <NavLink to="/contact" style={({isActive})=> ({
 backgroundColor: isActive ? 'red' : 'transparent'
  })}>İletişim</NavLink>
  <NavLink to="/blog">Blog</NavLink>
</nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<BlogLayout />} >
      <Route index={true} element={<Blog/>} />
      <Route path="categories" element={<Categories/>}/>
      </Route>
      <Route path="post/:id/:url" element={<Post/>}/>
      <Route path="*" element={<Page404/>} />

     
    </Routes>
    </>
  );
}

export default App;
