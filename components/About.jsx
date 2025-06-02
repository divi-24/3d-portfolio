import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px] relative"
      id="about"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 w-full h-full opacity-20 overflow-hidden">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10"
      >
        <p className="sectionSubText text-gray-300 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          INTRODUCTION
        </p>
        <h2 className="sectionHeadText text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
          Overview.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6 relative z-10"
      >
        <div className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/5 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
          Hello! I&apos;m Deepak Gupta, a passionate web developer and problem
          solver. Currently, I&apos;m pursuing a B.TECH degree in Computer Science and Engineering at
          G.L Bajaj Institute of technology and Management in Greater Noida, India, with an expected
          graduation year of 2028. I&apos;m a software developer with experience
          in TypeScript, TailwindCSS, and JavaScript. I specialize in frameworks
          such as React, Node.js, Next.js, React-Three-Fiber, and Three.js. My
          knowledge extends to fundamental data structures and algorithms,
          making me well-versed in frontend web development.
          <br className="sm:block hidden" />
          Let&apos;s collaborate to bring your ideas to life!
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="mailto:divi2749@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 w-fit px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <EmailIcon className="w-[30px] h-[30px] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
              divi2749@gmail.com
            </span>
          </Link>

          <div className="flex gap-4 items-center">
            {socials.map((social) => (
              <Link
                href={social.link}
                target="_blank"
                key={social.id}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="document/deepak_gupta.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          View Resume
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
