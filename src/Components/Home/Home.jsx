import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import ParticleBg from "../ParticleBg/ParticleBg";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="px-5 lg:px-10">
            <div className="sticky top-0 z-10">
                <Navbar></Navbar>
            </div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
            {/* <ParticleBg></ParticleBg> */}
        </div>
    );
};

export default Home;