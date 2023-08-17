import Bloglist from "../../components/Bloglist/bloglist";
import { useState, useEffect } from "react";
import searchBtn from "../../images/searchbtn.png";
import Footer from "../../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import Skeleton from "../../components/Skeleton-Screens/Skeleton";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlog, searchBlog } from "../../actions/blogActions";
import Pagination from "../../components/pagination";
import NavBar from "../../components/Navbar/Navbar";
import Circle from "../../components/Circle";
import "./blog.css";

const Blog = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlog({ id }));
    }, [dispatch, id]);

    const blogs = useSelector((state) => state?.blogStore?.blogs);
    const blogsData = useSelector((state) => state?.blogStore);

    const { loading, error } = blogsData;

    const searchedData = useSelector((state) => state?.searchBlog?.searched);
    const searchedState = useSelector((state) => state?.searchBlog);

    const [btnState, setBtnstate] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // const handleSubmit = (e) => {
    //     setBtnstate(true);
    //     e.preventDefault();
    // }
    // const handleSearch = async (e) => {
    //     setSearchTerm(e.target.value);
    //      searchQuery(e.target.value)
    //     .then(function(dat){
    //         return dat.json()
    //     }).then(function(result){
    //         setdata(result)
    //     }).catch(function(error){
    //         console.log("error",error.name);
    //     })
    // }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        dispatch(searchBlog({searchTerm}));
    }

    // async function searchQuery(searchterm){
    //    let result = await fetch(`https://zeesblog.onrender.com/blogs/search/${searchterm}`,{
    //         credentials:"include"
    //     });
    //     return result
    // }
    let toggleClassCheck = btnState ? 'sub-active' : null;
    function next() {
        const nextId = Number(id) + 1
        navigate(`/blogs/${nextId}`);
    }
    function previouse() {
        const previouseId = Number(id) - 1
        if (id <= 0) {
            return
        }
        navigate("/blogs/" + previouseId);
    }

    return (
        <div className="blogs-container">
            <NavBar />
            <Circle />
            <div className="sticky">
                <Footer />
            </div>
            <div className="search-bar">
                <input onChange={handleSearch} placeholder="Search" type="search" />
                <button>
                    <img src={searchBtn} alt="search button" />
                </button>
            </div>
            {loading ? (
                <Skeleton />
            ) : error ? (
                 <div className="err-msg"></div>
            ) : (
                <div>{blogs?.map((blog) => {
                    return <Bloglist blog={blog} key={blog._id} />
                })}</div>
            )}
            <Pagination currentPage={id} next={next} previouse={previouse} />
        </div>
    );
}

export default Blog;