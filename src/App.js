import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Suspense, lazy } from 'react';
import ScrollToTop from "./utilities/scrollToTop";
import Home from "./screens/Home";
import ScreenLayout from "./layouts/ScreenLayout";
import Blog from "./screens/Blogs-page/Blog";

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
          {/* <Route path="*" element={<NotFound />} /> 404 PAGE */}
        </Routes>
      </ScrollToTop>
    </Suspense>
  );
}

export default App;
