import React from "react";

import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.jpg";
import BannerImage2 from "../assets/Images/aboutus2.jpg";
import BannerImage3 from "../assets/Images/aboutus3.jpg";

import Footer from "../components/common/Footer";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponenet from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";
import Img from "../components/common/Img";
import ReviewSlider from "./../components/common/ReviewSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../components/common/motionFrameVarients";

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <motion.header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            <motion.p
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              {" "}
              Driving Innovation in Online Education for a
              <HighlightText text={"Brighter Future"} />
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]"
            >
              CodeMind is leading the way in revolutionizing online education.
              We are committed to shaping a brighter future by providing
              innovative courses, harnessing the power of emerging technologies,
              and fostering a dynamic learning community.
            </motion.p>
          </motion.header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>

          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <Img
              src={BannerImage1}
              alt=""
              className="w-full h-auto max-h-[300px] object-cover"
            />
            <Img
              src={BannerImage2}
              alt=""
              className="w-full h-auto max-h-[300px] object-cover"
            />
            <Img
              src={BannerImage3}
              alt=""
              className="w-full h-auto max-h-[300px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="my-24 flex lg:w-[50%] flex-col gap-10"
            >
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>

              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                CodeMind emerged from a collective vision and dedication to
                reshaping education. It began with a team of experts,
                innovators, and passionate learners who identified the demand
                for flexible, high-quality, and accessible learning
                opportunities in an ever-evolving digital landscape.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As seasoned educators, we experienced the constraints of
                traditional learning systems firsthand. We believed that
                knowledge should go beyond classroom walls and geographical
                limits. Our vision for CodeMind was to create a platform that
                bridges these gaps, empowering learners from all backgrounds to
                reach their full potential. potential.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Img
                src={FoundingStory}
                alt="FoundingStory"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we embarked on a mission to build
                CodeMind—an innovative e-learning platform designed to transform
                the way people acquire knowledge. Our team of dedicated experts
                worked relentlessly to develop a seamless, tech-driven platform
                that blends advanced technology with engaging content. By
                fostering an interactive and dynamic learning environment,
                CodeMind empowers students from all backgrounds, including PCCOE
                students, to gain industry-relevant skills, expand their
                knowledge, and unlock limitless opportunities in the digital
                world.
              </p>
            </div>

            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                At CodeMind, our mission extends far beyond simply offering
                online courses. We aim to cultivate a thriving community of
                learners where individuals can connect, collaborate, and grow
                together. We believe that true knowledge flourishes in an
                environment of shared learning and meaningful discussions.
                Through interactive forums, live sessions, and networking
                opportunities, we foster a culture of collaboration, ensuring
                that every learner, including PCCOE students, gains valuable
                insights, industry connections, and a supportive learning
                network.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StatsComponenet />

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Reviws from Other Learner */}
      <div className=" my-20 px-5 text-white ">
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
