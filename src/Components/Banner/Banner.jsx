import Text from "../Text/Text";
import "@lottiefiles/lottie-player";
import resume from '../../assets/Front-end developer resume of Saad Bin Abdus Salam.pdf'
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const Banner = () => {


    return (
        <div id="/" className="mt-32 py-10 bg-white text-black lg:px-2 md:flex justify-between items-center">
            <div>
                <h2 className="text-4xl font-bold">Hi, I am <span className="text-orange-400">Md: Saad Bin Abdus Salam.</span></h2>
                <Text></Text>
                <div>
                    <Link to="contact" className="btn btn-primary mr-4">Hire Me</Link>
                    <a href={resume} download className="btn btn-primary"><FaDownload></FaDownload> Resume</a>
                </div>
            </div>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src='../../../public/91382-web-development.json'
                style={{ width: "400px" }}
            ></lottie-player>
        </div>
    );
};

export default Banner;