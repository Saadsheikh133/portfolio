import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/Saadsheikh133"><FaGithub size={30}></FaGithub></a>
                        <a href="https://www.facebook.com/tarekmanuar.prince"> <FaFacebook size={30}></FaFacebook></a>
                        <a href="https://www.linkedin.com/in/saad-sheikh-570567234/"> <FaLinkedin size={30}></FaLinkedin></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Md:Saad Bin Abdus Salam</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;