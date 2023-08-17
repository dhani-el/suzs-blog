import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Suspense, lazy } from 'react';
import ScrollToTop from "./utilities/scrollToTop";
import Home from "./screens/Home";
import ScreenLayout from "./layouts/ScreenLayout";
import Blog from "./screens/Blogs-page/Blog";
import BlogDetails from "./screens/BlogDetails-page/blog";
import Genre from "./screens/Genre-page/genre";

function App() {
  return (
    <Suspense fallback={<div> loading</div>} >
      <ScrollToTop>
        <ToastContainer />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ScreenLayout>
                <Home />
              </ScreenLayout>
            }
          />
          <Route
            exact
            path="/blogs/:id"
            element={
              <Blog />
            }
          />
          <Route
            exact
            path="/blog/:id"
            element={
              <BlogDetails />
            }
          />
          <Route
            exact
            path="/genre"
            element={
              <Genre />
            }
          />
          {/* <Route path="*" element={<NotFound />} /> 404 PAGE */}
        </Routes>
      </ScrollToTop>
    </Suspense>
  );
}

export default App;
