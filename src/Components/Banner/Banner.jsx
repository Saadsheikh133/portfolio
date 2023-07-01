import Text from "../Text/Text";
import "@lottiefiles/lottie-player";
import resume from '../../assets/Front-end developer resume of Saad Bin Abdus Salam.pdf'

const Banner = () => {


    return (
        <div className="mt-20 py-10 bg-white text-black lg:px-2 md:flex justify-between items-center">
            <div>
                <h2 className="text-4xl font-bold">Hi, I am <span className="text-orange-400">Md: Saad Bin Abdus Salam.</span></h2>
                <Text></Text>
                <div>
                    <button className="btn btn-primary mr-4">Hire Me</button>
                    <a href={resume} download className="btn btn-primary">Download Resume</a>
                </div>
            </div>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src='../../../public/91382-web-development.json'
                style={{ width: "300px" }}
            ></lottie-player>
        </div>
    );
};

export default Banner;