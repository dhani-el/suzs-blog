import React, { useEffect } from "react";
import './genre.css';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenre } from "../../actions/blogActions";
import Skeleton from "../../components/Skeleton-Screens/Skeleton"
import Bloglist from "../../components/Bloglist/bloglist";
import Footer from "../../components/Footer";

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
    }, []);
    const { blogs, loading, error } = useSelector((state) => state?.fetchGenre);
    // console.log(blogs);
    const x = useSelector((state) => state?.fetchGenre);
    console.log(x);
    return (
        <div className="genre-container">
            <h2 className="genre-header">{name}</h2>
            <div className="genre-container-2">
                {loading ? (<Skeleton />) : (<Bloglist blogs={blogs?.filter((blog) => blog?.genre.toLowerCase() === name.toLowerCase())} />)}
                {error && <div className="err-msg">{error}</div>}
                <Footer />
            </div>
        </div>
    );
}

export default Genre;