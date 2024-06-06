import {HERO_CONTENT} from "../constants/index.js";
// import website from "../assets/website.png";
// import website from "../assets/Allura - Giant Phone.png"
import website from "../assets/Brazuca - Date Night.png"
import { motion } from "framer-motion"

const words = HERO_CONTENT.split(" ");
console.log(words);

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});



const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start ">
                        <motion.p
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="font-serif font-extrabold text-3xl text-blue-200 ">Hey I'm,</motion.p>
                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="pb-20 text-6xl  font-thin tracking-tight lg:mt-16 lg:text-8xl ">Ajay Kumar</motion.h1>
                        <motion.span
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-blue-500 via-green-300
                        to-purple-400 bg-clip-text text-4xl tracking-tight text-transparent animate-bounce">Software Developer</motion.span>
                        <motion.p
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 py-6 font-bold text-4xl sm:text-center lg:text-start leading-tight tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-green-400 shadow-lg ">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{x:100,opacity:0}}
                            animate={{x:0,opacity:1}}
                            transition={{duration:1,delay:1.2}}
                            src={website} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero