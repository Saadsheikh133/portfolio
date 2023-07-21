import Text from "../Text/Text";
import resume from '../../../public/pdf/Front-end developer resume of Saad Bin Abdus Salam.pdf'
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import Lottie from "react-lottie-player";
import img from '../../../public/91382-web-development.json'

const Banner = () => {


    return (
        <div id="/" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="mt-10 py-10 rounded-xl bg-gradient-to-r from-white to-cyan-100 text-black lg:px-2 md:flex justify-between items-center">
            <div className="pl-4">
                <h2 className="text-4xl font-bold">Hi, I am <span className="text-orange-400 uppercase">Md: Saad Bin Abdus Salam.</span></h2>
                <Text></Text>
                <div>
                    <Link to="contact" className="text-white border-none bg-gradient-to-r from-purple-600 to-cyan-400 px-6 btn rounded-lg mr-4">Hire Me</Link>
                    <a href={resume} download className="text-white border-none bg-gradient-to-r from-purple-600 to-cyan-400 px-4 btn"><FaDownload></FaDownload> Resume</a>
                </div>
            </div>
            <Lottie
                animationData={img}
                play
                loop
                style={{ width: "400px" }}
            />
        </div>
    );
};

export default Banner;