import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Lottie from 'react-lottie-player';
import contact from '../../../public/76038-contact-mail.json'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_as5xjzq', 'template_om6z4k2', form.current, 'vSD8qo2GUcNs5uRQF')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='my-20'>
            <h2 className="text-4xl font-bold text-center mt-36 "><span className="text-orange-500">Contact</span> Me</h2>
            <div className='lg:flex gap-4 w-full items-center'>
                <div className='lg:w-1/2'>
                    <Lottie
                        animationData={contact}
                        play
                        loop
                        style={{ width: "400px" }}
                    />
                </div>
                <div className='lg:w-1/2 mx-2'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label><br />
                        <input className='py-2 px-2 lg:w-3/4 w-full rounded-lg my-4' type="text" name="from_name" placeholder='Your Name' /><br />
                        <label>Email</label><br />
                        <input className='py-2 px-2 lg:w-3/4 w-full rounded-lg my-4' type="email" name="from_email" placeholder='Your Email' /><br />
                        <label>Message</label><br />
                        <textarea className='py-2 px-2 lg:w-3/4 w-full rounded-lg my-2' name="message" placeholder='Your Message' /><br />
                        <input className='btn btn-primary' type="submit" value="Send" /><br />
                    </form>
                    </div>
           </div>
        </div>
    );
};

export default Contact;