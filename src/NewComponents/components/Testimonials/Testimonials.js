import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Testimonials.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="mt-16 lg:mt-40">
        <div className="h-px mx-12 lg:mx-32 bg-black hidden lg:block"></div>
        <p className="hidden lg:block">
        <Link to="/"><span className="flex justify-end mr-40 mt-2 mb-8 lg:mb-16 text-3xl"><FontAwesomeIcon icon={faArrowUp} 
      /></span></Link>
      </p>
        <h1 className="text-3xl text-center text-teal-600 font-bold">Thousands of Satisfied Coders</h1>
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={6100}>
          <div className="flex">
            <motion.div
            className="my-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            
            >
              <img
                src="https://imgdb.net/storage/uploads/42bac8baabb639efbe630d99575f6ff3c2a4cad6f1b86b4d992e97f705ceb56b.png"
                alt=""
              />
              <div className="myCarousel">
                <h3>Shirley Fultz</h3>
                <h4>Designer</h4>
                <p className="">
                  It's freeing to be able to catch up on customized news and not be distracted by a social media element on the
                  same site
                </p>
              </div>
            </motion.div>

            <motion.div
            className="my-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            
            >
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png"
                alt=""
              />
              <div className="myCarousel">
                <h3>Daniel Keystone</h3>
                <h4>Designer</h4>
                <p>The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.</p>
              </div>
            </motion.div>

            <motion.div
            className="my-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            
            >
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png"
                alt=""
              />
              <div className="myCarousel">
                <h3>Theo Sorel</h3>
                <h4>Designer</h4>
                <p>I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!</p>
              </div>
            </motion.div>
          </div>
          <div className="flex">
            <motion.div
            className="my-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            
            >
              <img
                src="https://imgdb.net/storage/uploads/42bac8baabb639efbe630d99575f6ff3c2a4cad6f1b86b4d992e97f705ceb56b.png"
                alt=""
              />
              <div className="myCarousel ">
                <h3>Shirley Fultz</h3>
                <h4>Designer</h4>
                <p>
                  It's freeing to be able to catch up on customized news and not be distracted by a social media element on the
                  same site
                </p>
              </div>
            </motion.div>

            <motion.div
            className="my-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            
            >
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png"
                alt=""
              />
              <div className="myCarousel">
                <h3>Daniel Keystone</h3>
                <h4>Designer</h4>
                <p>The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.</p>
              </div>
            </motion.div>

            <motion.div
            className="my-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            
            >
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png"
                alt=""
              />
              <div className="myCarousel">
                <h3>Theo Sorel</h3>
                <h4>Designer</h4>
                <p>I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!</p>
              </div>
            </motion.div>
          </div>
          <div className="flex">
            <motion.div
            className="my-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            
            >
              <img
                src="https://imgdb.net/storage/uploads/42bac8baabb639efbe630d99575f6ff3c2a4cad6f1b86b4d992e97f705ceb56b.png"
                alt=""
              />
              <div className="myCarousel ">
                <h3>Shirley Fultz</h3>
                <h4>Designer</h4>
                <p>
                  It's freeing to be able to catch up on customized news and not be distracted by a social media element on the
                  same site
                </p>
              </div>
            </motion.div>

            <motion.div
            className="my-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            
            >
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png"
                alt=""
              />
              <div className="myCarousel">
                <h3>Daniel Keystone</h3>
                <h4>Designer</h4>
                <p>The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.</p>
              </div>
            </motion.div>

            <motion.div
            className="my-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            
            >
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png"
                alt=""
              />
              <div className="myCarousel">
                <h3>Theo Sorel</h3>
                <h4>Designer</h4>
                <p>I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!</p>
              </div>
            </motion.div>
          </div>
        </Carousel>
        <div className="w-60 mx-auto my-8 lg:my-14">
          <Link to="/all-testimonials" className="cursor-pointer text-blue-500 hover:text-[brown] font-semibold text-xl">
            Read more testimonials {">"}
          </Link>
        </div>
      </div>
    );
  }
}
