import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Suspense, lazy, useState } from 'react';
import ScrollToTop from "./utilities/scrollToTop";
import Cursor from "./components/Cursor/cursor";
import ErrorPage from "./screens/404Page/404page";

const Home = lazy(() => import("./screens/Home"));
const Blog = lazy(() => import("./screens/Blogs-page/Blog"));
const BlogDetails = lazy(() => import("./screens/BlogDetails-page/blog"));
const Genre = lazy(() => import("./screens/Genre-page/genre"));
const About = lazy(() => import("./screens/About-page/about"));
const Login = lazy(() => import("./screens/Login-page/login"));
const Register = lazy(() => import("./screens/Register-page/register"));

function App() {
  const [curse, setCurse] = useState(false);
  const updateCurse = () => {
    setCurse(true);
  }
  const updateLeave = () => {
    setCurse(false);
  }
  return (
    <ScrollToTop>
      <ToastContainer />
      <Cursor curse={curse} />
      <Suspense fallback={<div className="suspense-text">zee</div>} >
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
          <Route path="" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </ScrollToTop>
  );
}

export default App;
