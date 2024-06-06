import aboutMe from '../assets/aboutbg.jpg'
import {ABOUT_TEXT} from "../constants/index.js";
import { motion } from "framer-motion"

const About = ()=>{
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> me</span>
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{ opacity: 0,x:-100}}
                     transition={{duration:1 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="bg-transparent w-[500px] rounded-2xl" src={aboutMe} alt="img"/>
                    </div>
                </motion.div>
                <motion.div
                     whileInView={{opacity:1, x:0}}
                     initial={{ opacity:0,x:100}}
                     transition={{duration:1 }}
                     className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="text-lg my-2 max-w-xl py-6 ">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;