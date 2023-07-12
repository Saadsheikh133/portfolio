import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar justify-between bg-white text-black rounded-lg z-10 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-xl text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link>
                            </li>
                            <li>
                                <Link to="skill" spy={true} smooth={true} offset={50} duration={500} >Skills</Link>
                            </li>
                            <li>
                                <Link to="project" spy={true} smooth={true} offset={50} duration={500} >Projects</Link>
                            </li>
                            <li>
                                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <i className=" normal-case lg:text-4xl font-semibold text-orange-500">MD: SAAD BIN ABDUS SALAM</i>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl px-1">
                        <li>
                            <Link to="/" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link>
                        </li>
                        <li>
                            <Link to="skill" spy={true} smooth={true} offset={50} duration={500} >Skills</Link>
                        </li>
                        <li>
                            <Link to="project" spy={true} smooth={true} offset={50} duration={500} >Projects</Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;