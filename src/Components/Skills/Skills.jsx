import html from '../../assets/image/html.jpg'
import css from '../../assets/image/css.jpg'
import js from '../../assets/image/js.jpg'
import react from '../../assets/image/react.jpg'
import tailwind from '../../assets/image/tailwind.jpg'
import bootstrap from '../../assets/image/bootstrap.jpg'
import node from '../../assets/image/node.jpg'
import mongodb from '../../assets/image/mongodb.jpg'
import jwt from '../../assets/image/jwt.jpg'
import stripe from '../../assets/image/stripe.jpg'
import github from '../../assets/image/github.jpg'
import firebase from '../../assets/image/firebase.jpg'

const Skills = () => {
    return (
        <div>
            <h2 className='text-center my-10 text-4xl font-bold'>My <span className='text-orange-500'>Skills</span></h2>
            <div className='my-20 px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
                <div className="card w-32 lg:w-52 bg-gradient-to-t from-black to-slate-700  shadow-orange-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 ">
                        <img src={html} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Html</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-blue-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={css} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Css</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-yellow-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={js} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Javascript</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-sky-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={react} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">React.js</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-sky-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={tailwind} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tailwind Css</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-violet-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={bootstrap} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bootstrap</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-blue-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={node} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Node.js</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-green-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={mongodb} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MongoDb</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-blue-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={jwt} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Jwt</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-blue-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={stripe} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Stripe</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-yellow-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={firebase} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Firebase</h2>
                    </div>
                </div>
                <div className="card w-32 lg:w-52 bg-base-100 bg-gradient-to-t from-black to-slate-700 shadow-blue-500 shadow-md">
                    <figure className="lg:px-4 lg:pt-4 py-1">
                        <img src={github} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Github</h2>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Skills;