import { FaGithub } from "react-icons/fa";
// import sports from '../../assets/image/sports.png'
import Marquee from "react-fast-marquee";
import banner from '../../assets/image/banner.png'
import classes from '../../assets/image/class.png'
import instructor from '../../assets/image/instructor.png'
import footer from '../../assets/image/footer.png'


const Projects = () => {
    return (
        <div id="project" className="my-10">
            <h2 className="text-5xl text-center font-bold my-10"><span className="text-orange-500">My</span> Projects</h2>
            <div className="lg:w-full lg:flex gap-4 px-2 my-10 items-center">
                <div className="lg:w-1/2 rounded-xl border">
                    <Marquee direction="up" className="w-full overflow-hidden object-none" autoFill={true}>
                        {/* <img className="rounded-xl mb-4" src={banner} alt="" /> */}
                        <img className="rounded-xl mb-4 w-full object-cover" src={classes} alt="" />
                        <img className="rounded-xl mb-4 w-full object-cover" src={instructor} alt="" />
                        <img className="rounded-xl mb-4 w-full object-cover" src={footer} alt="" />
                    </Marquee>
                </div>
                <div className="lg:w-1/2 mt-10 bg-gradient-to-r from-white to-cyan-100 text-black px-4 py-4 shadow-md shadow-white rounded-xl">
                    <h2 className="uppercase text-3xl font-semibold text-center pb-4">sports today</h2>
                    <div className="lg:text-center text-start my-4">
                        <a className="text-center text-xl text-blue-600 hover:underline border border-blue-500 px-4 py-2 rounded-2xl mr-4 hover:bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-white" href="https://summer-camp-c5927.web.app/">Live Link</a>
                        <a className="text-center text-xl text-blue-600 hover:underline border border-blue-500 px-4 py-2 rounded-2xl mr-4 hover:bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-white" href="https://github.com/Saadsheikh133/summer-camp-client"><FaGithub className="inline mr-2"></FaGithub>Client</a>
                        <a className="text-center text-xl text-blue-600 hover:underline border border-blue-500 px-4 py-2 rounded-2xl hover:bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-white" href="https://github.com/Saadsheikh133/summer-camp-server"><FaGithub className="inline mr-2"></FaGithub>Server</a>
                    </div>
                    <div>
                        <p>Here are some features about project---</p>
                        <p>1. This project is made with sports information. In this project, information about various types of sports has been highlighted.</p>
                        <p>2. Three types of user roles are created and implement different functionalities.</p>
                        <p>3. Normal user can select any course and enroll in the selected course. Instructors can add classes.</p>
                        <p>4. Admin can approve or reject instructors class and give reasons for rejection. Admin can assign a user to instructor or admin role.</p>
                        <p>5. This project implements a payment system using Stripe.</p>
                        <h3 className="text-3xl text-center font-bold my-3 bg-slate-700 py-1 rounded-xl text-white">TECHNOLOGY:</h3>
                        <p className="">[html, css, react.js, express.js, stripe, framer motion, React-awesome-reveal, firebase,tailwind css, react icons, react awesome,react hook form,react marquee, etc]</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-full lg:flex px-2 my-20">
                <div className="lg:w-1/2">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa maiores aliquid blanditiis possimus numquam enim sapiente in animi, explicabo ullam consequatur veritatis magnam modi saepe delectus laborum? Reprehenderit, alias.</h2>
                </div>
                <div className="lg:w-1/2 bg-gradient-to-r mt-10 from-white to-cyan-100 text-black px-4 py-4 shadow-md shadow-white rounded-xl">
                    <h2 className="uppercase text-3xl font-semibold text-center pb-4">Toy Collections</h2>
                    <div className="lg:text-center text-start my-4">
                        <a className="text-center text-xl text-blue-600 hover:underline border border-blue-500 px-4 py-2 rounded-2xl mr-4 hover:bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-white" href="https://toy-marketplace-f5677.web.app">Live Link</a>
                        <a className="text-center text-xl text-blue-600 hover:underline border border-blue-500 px-4 py-2 rounded-2xl mr-4 hover:bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-white" href="https://github.com/Saadsheikh133/toy-market-client"><FaGithub className="inline lg:mr-2 mr-1"></FaGithub>Client</a>
                        <a className="text-center text-xl text-blue-600 hover:underline border border-blue-500 px-4 py-2 rounded-2xl mr-4 hover:bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-white" href="https://github.com/Saadsheikh133/toy-market-server"><FaGithub className="inline lg:mr-2 mr-1"></FaGithub>Server</a>
                    </div>
                    <div>
                        <p>Here are some features about project---</p>
                        <p>1. Basically this project has shown some information about toy cars.</p>
                        <p>2. In this project, Four methods of CRUD operation have been used on the server site and show on the ui.</p>
                        <p>3. The post method of crud operation is used where the user can create the product with some information. And it will show on my toy page.</p>
                        <p>5. All the products of this project have been shown on the All Toys page.</p>
                        <p>6. Implement a searching system on the all toy page based on toyName property.</p>
                        <h3 className="text-3xl text-center font-bold my-3 bg-slate-900 rounded-xl py-1 text-white">TECHNOLOGY:</h3>
                        <p className="">[html, css, react.js, express.js, firebase,tailwind css, react icons, react awesome, etc]</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-full lg:flex px-2 my-20">
                <div className="lg:w-1/2">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa maiores aliquid blanditiis possimus numquam enim sapiente in animi, explicabo ullam consequatur veritatis magnam modi saepe delectus laborum? Reprehenderit, alias.</h2>
                </div>
                <div className="lg:w-1/2 mt-10 bg-gradient-to-r from-white to-cyan-100 text-black px-4 py-4 shadow-md shadow-white rounded-xl">
                    <h2 className="uppercase text-3xl font-semibold text-center pb-4">Toy Collections</h2>
                    <div className="lg:text-center text-start my-4">
                        <a className="text-center text-xl text-blue-600 hover:underline border border-blue-500 px-4 py-2 rounded-2xl mr-4 hover:bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-white" href="https://chef-recipe-hunter-483fd.firebaseapp.com/">Live Link</a>
                        <a className="text-center text-xl text-blue-600 hover:underline border border-blue-500 px-4 py-2 rounded-2xl mr-4 hover:bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-white" href="https://github.com/Saadsheikh133/chef-recipe-client"><FaGithub className="inline lg:mr-2 mr-1"></FaGithub>Client</a>
                        <a className="lg:text-center text-xl text-blue-600 hover:underline border border-blue-500 px-4 py-2 rounded-2xl mr-4 hover:bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-white" href="https://github.com/Saadsheikh133/chef-recipe-server"><FaGithub className="inline lg:mr-2 mr-1"></FaGithub>Server</a>
                    </div>
                    <div>
                        <p>Here are some features about project---</p>
                        <p>1. This project main purpose is showing in Bangladeshi chefs delicious food recipes.</p>
                        <p>2. When you going to view recipe.You will must be login or registration first.Then you see food recipe.</p>
                        <p>3. In this project has a blog page.There are some important questions answered And added a system to convert or download PDF files from React.</p>
                        <p>4. In this project implement user login and registration method.when user will login or registered.Then users use this project properly.</p>
                        <h3 className="text-3xl text-center font-bold my-3 text-white bg-slate-900 rounded-xl py-1">TECHNOLOGY:</h3>
                        <p className="">[html, css, react.js, express.js, firebase,tailwind css, react icons, react awesome, etc]</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;