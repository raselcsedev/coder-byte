import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const sendEmail = (e) =>{
       e.preventDefault();
       emailjs.sendForm('service_o6wjz6a', 'template_e2klmnl', e.target, 'lYpZLeRzAA4j2Tdju')
       .then(res=>{
        console.log(res)
       }).catch(err=>
        console.log(err))
       ;
  }
  return (
    <div className="pb-12">
        <div className="h-px mx-12 lg:mx-32 bg-black hidden lg:block"></div>
        <p className="hidden lg:block">
        <Link to="/"><span className="flex justify-end animate-bounce mr-40 mt-2 lg:mb-4 text-3xl"><FontAwesomeIcon icon={faArrowUp} 
      /></span></Link>
      </p>
      <div class="hero">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 320"><path fill="#0099ff" fill-opacity="0.3" d="M0,192L40,176C80,160,160,128,240,133.3C320,139,400,181,480,181.3C560,181,640,139,720,144C800,149,880,203,960,186.7C1040,171,1120,85,1200,48C1280,11,1360,21,1400,26.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img src="https://static.vecteezy.com/system/resources/previews/003/578/834/non_2x/online-support-illustration-flat-design-concept-vector.jpg" class="lg:max-w-lg maz-w-sm rounded-lg lg:ml-48" alt="" />
          <form onSubmit={sendEmail}>
          <div className="lg:mr-20">
            <h1 class="text-3xl font-bold text-center font-mono mb-4">Contact Us</h1>
            <div className="text-center">
              <input type="text" placeholder="Name" name="name" className="form-control input w-72 max-w-lg border rounded-full border-blue-400 mb-4" />
              <input type="email" placeholder="Email" name="user_email" className="form-control input w-72 max-w-xs border rounded-full border-blue-400 mb-4" />
              <textarea
                className="form-control textarea w-72 max-w-xs rounded-lg border border-blue-400"
                placeholder="Your message"
                name="message"
                rows={6}
              ></textarea>
            </div>
            <div className="flex justify-center">
            <input type="submit" value="Submit" class="form-control cursor-pointer py-1 px-4 border rounded-full border-red-500 text-white bg-red-500 font-semibold mt-3 mb-3">
              </input>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
