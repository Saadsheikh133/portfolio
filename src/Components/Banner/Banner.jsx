import Text from "../Text/Text";
import resume from '../../assets/Front-end developer resume of Saad Bin Abdus Salam.pdf'
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion"
import Lottie from "react-lottie-player";
import img from '../../../public/91382-web-development.json'

const Banner = () => {


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} 
        >
            <div id="/" className="mt-10 py-10 rounded-xl bg-white text-black lg:px-2 md:flex justify-between items-center">
                <div>
                    <h2 className="text-4xl font-bold">Hi, I am <span className="text-orange-400">Md: Saad Bin Abdus Salam.</span></h2>
                    <Text></Text>
                    <div>
                        <Link to="contact" className="btn btn-primary mr-4">Hire Me</Link>
                        <a href={resume} download className="btn btn-primary"><FaDownload></FaDownload> Resume</a>
                    </div>
                </div>
                <Lottie
                    animationData={img}
                    play
                    loop
                    style={{ width: "400px" }}
                />
            </div>
        </motion.div>
    );
};

export default Banner;