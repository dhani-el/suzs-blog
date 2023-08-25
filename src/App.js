import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Suspense, lazy, useState } from 'react';
import ScrollToTop from "./utilities/scrollToTop";
import Home from "./screens/Home";
import Blog from "./screens/Blogs-page/Blog";
import BlogDetails from "./screens/BlogDetails-page/blog";
import Genre from "./screens/Genre-page/genre";
import About from "./screens/About-page/about";
import Login from "./screens/Login-page/login";
import Cursor from "./components/Cursor/cursor";
import Register from "./screens/Register-page/register";
import Admin from "./screens/Admin-page/admin";

function App() {
  const [curse, setCurse] = useState(false);
  const updateCurse = () => {
    setCurse(true);
  }
  const updateLeave = () => {
    setCurse(false);
  }
  return (
    <Suspense fallback={<div> loading</div>} >
      <ScrollToTop>
        <ToastContainer />
        <Cursor curse={curse} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                updateCurse={updateCurse}
                updateLeave={updateLeave}
              />
            }
          />
          <Route
            exact
            path="/blogs/:id"
            element={
              <Blog
                updateCurse={updateCurse}
                updateLeave={updateLeave}
              />
            }
          />
          <Route
            exact
            path="/blog/:id"
            element={
              <BlogDetails
                updateCurse={updateCurse}
                updateLeave={updateLeave}
              />
            }
          />
          <Route
            exact
            path="/genre"
            element={
              <Genre
                updateCurse={updateCurse}
                updateLeave={updateLeave}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About
                updateCurse={updateCurse}
                updateLeave={updateLeave}
              />
            }
          />
          <Route
            exact
            path="/login"
            element={
              <Login />
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <Register />
            }
          />
          <Route
            exact
            path="/admin"
            element={
              <Admin/>
            }
          />
          {/* <Route path="*" element={<NotFound />} /> 404 PAGE */}
        </Routes>
      </ScrollToTop>
    </Suspense>
  );
}

export default App;
