import { useState } from "react";


const About = () => {

    const [text, setText] = useState(true);

    return (
        <section id="about">
            <div className="space-y-4 px-2 text-justify text-xl">
                <h2 className="uppercase text-center  text-4xl font-bold my-10">About <span className="text-orange-400">Me</span></h2>
                <p>My name is  Md: Saad Bin Abdus Salam.I am from Natore, Bangladesh. I am a student of 1st year bachelor of honours in chemistry department to sep 22 to continue.My institute name is Nazipur govt college, Noagoan.The reason, I became a web developer. It was 2020. My uncle is a web developer. I saw my uncle doing a project. His project created curiosity in my mind. Since then, I started browsing this topic on Google and YouTube. After a few days of browsing, I decided that I would become a web developer.As a web developer, I started my journey with html and css.After finishing html and css in 1 month.I switched to javascript.I enjoyed the basics of javascript.When the basics of javascript was completed. I moved to react.js and express.js. Recently I have completed my training in this field. I have completed 4 projects using MERN stack development. </p>
                <p className={`${text ? "hidden" : "block"}`}>I am a junior full-stack web developer with a passion for building dynamic and user-friendly web applications. I have experience in both front-end and back-end development, allowing me to create end-to-end solutions for various projects.</p>
                <p className={`${text ? "hidden" : "block"}`}>On the front-end, I am skilled in HTML, CSS, and JavaScript, and I am familiar with modern frameworks and libraries such as React.js. I enjoy transforming design mockups into interactive and responsive user interfaces that provide an exceptional user experience.</p>
                <p className={`${text ? "hidden" : "block"}`}>When it comes to the back-end, I am proficient in server-side programming languages like JavaScript (Node.js). I have worked with databases such as MongoDB, and I am comfortable creating and optimizing database schemas to ensure efficient data management.</p>
                <p className={`${text ? "hidden" : "block"}`}>I am a fast learner, always eager to expand my knowledge and stay up to date with the latest technologies and best practices in web development. I enjoy collaborating with teams and contributing to the success of projects. I am excited about the opportunity to apply my skills and grow as a full-stack web developer.</p>
                <button onClick={() => setText(!text)} className="btn text-white bg-gradient-to-r from-purple-600 to-cyan-400 btn-sm">{text ? "See More" : "See Less"}</button>
            </div>
       </section>
    );
};

export default About;