import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import banner from '../../assets/image/banner.png'
import classes from '../../assets/image/classes.png'
import classes2 from '../../assets/image/class.png'
import instructor from '../../assets/image/instructor.png'
import instructors from '../../assets/image/instructors.png'
import footer from '../../assets/image/footer.png'
import manageClass from '../../assets/image/manageClass.png'
import manageUser from '../../assets/image/manageUser.png'

import toyB from '../../assets/image/toyB.png'
import toy from '../../assets/image/toy.png'
import newToy from '../../assets/image/newToy.png'
import best from '../../assets/image/best.png'
import toyFooter from '../../assets/image/toyFooter.png'
import category from '../../assets/image/category.png'
import allToys from '../../assets/image/allToys.png'
import addToy from '../../assets/image/addToy.png'

import foodB from '../../assets/image/foodB.png'
import chef from '../../assets/image/chef.png'
import chefs from '../../assets/image/chefs.png'
import pitha from '../../assets/image/pitha.png'
import slider from '../../assets/image/slider.png'
import foodfoter from '../../assets/image/foodfoter.png'
import blog from '../../assets/image/blog.png'

const Projects = () => {
    return (
        <div id="project" className="my-10">
            <h2 className="text-5xl text-center font-bold my-10"><span className="text-orange-500">My</span> Projects</h2>
            <div className="lg:w-full lg:flex gap-4 px-2 my-10 items-center">
                <div className="lg:w-1/2 rounded-xl mt-10">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img className="lg:h-[500px] rounded-xl" src={banner} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={classes} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={classes2} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={instructor} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={instructors} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={footer} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={manageClass} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={manageUser} />
                            </SwiperSlide>
                        </Swiper>
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
            <div className="lg:w-full lg:flex gap-4 px-2 my-20">
                <div className="lg:w-1/2 rounded-xl mt-10">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={toyB} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={toy} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={newToy} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={best} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={category} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={toyFooter} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={allToys} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={addToy} />
                        </SwiperSlide>
                    </Swiper>
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
            <div className="lg:w-full lg:flex gap-4 px-2 my-20">
                <div className="lg:w-1/2 rounded-xl mt-10">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={foodB} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={chef} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={chefs} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={pitha} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={slider} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={foodfoter} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="lg:h-[500px] rounded-xl" src={blog} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="lg:w-1/2 mt-10 bg-gradient-to-r from-white to-cyan-100 text-black px-4 py-4 shadow-md shadow-white rounded-xl">
                    <h2 className="uppercase text-3xl font-semibold text-center pb-4">Healthy Foods</h2>
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