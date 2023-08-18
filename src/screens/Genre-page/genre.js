import React, { useEffect } from "react";
import './genre.css';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenre } from "../../actions/blogActions";
import Skeleton from "../../components/Skeleton-Screens/Skeleton"
import Bloglist from "../../components/Bloglist/bloglist";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar/Navbar";
import Circle from "../../components/Circle";

const Genre = () => {
    const dispatch = useDispatch();
    function useQuery() {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();
    let name = query.get("name");
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchGenre(name));
    }, [dispatch, name]);
    const { blogs, loading, error } = useSelector((state) => state?.fetchGenre);
    return (
        <div className="genre-container">
        <NavBar/>
        <Circle/>
            <h2 className="genre-header">{name}</h2>
            <div className="genre-container-2">
                <div className="genre-bloglist">
                    {loading ? (<Skeleton />) : (blogs?.map((blog) => {
                        return <Bloglist blog={blog} key={blog?._id} />
                    }))}
                </div>
                {error && <div className="err-msg">{error}</div>}
                <Footer />
            </div>
        </div>
    );
}

export default Genre;