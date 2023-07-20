import Home from "../../Home/Home";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Main = () => {
    return (
        <div>
            <Home></Home>
        </div>
    );
};

export default Main;