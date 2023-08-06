import Footer from "../components/Footer";
import NavBar from "../components/Navbar/Navbar";

const ScreenLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};

export default ScreenLayout;