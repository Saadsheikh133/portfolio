import Typewriter from 'typewriter-effect';

const Text = () => {
    return (
        <div className='uppercase text-3xl py-5'>
            <Typewriter
                options={{
                    strings: [
                        "Front End Developer",
                        "Back End Developer",
                        "specialized in react.js"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
      </div>
    );
};

export default Text;