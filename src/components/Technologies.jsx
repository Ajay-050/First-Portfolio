import {RiReactjsLine} from "react-icons/ri";
import {SiMongodb} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {  FaPython, FaCss3Alt, FaHtml5, FaJs, FaGithub } from "react-icons/fa";
import { SiCplusplus} from "react-icons/si";
import { motion } from "framer-motion";


const IconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y: [10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={IconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <RiReactjsLine className="text-4xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    variants={IconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiMongodb className="text-4xl text-green-500"/>
                </motion.div>
                <motion.div
                    variants={IconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaNodeJs className="text-4xl text-green-500"/>
                </motion.div>
                <motion.div
                    variants={IconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaPython className="text-4xl text-blue-500 mr-2"/>
                </motion.div>
                <motion.div
                    variants={IconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaCss3Alt className="text-4xl text-blue-500 mr-2"/>
                </motion.div>
                <motion.div
                    variants={IconVariants(0)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaHtml5 className="text-4xl text-orange-500 mr-2"/>
                </motion.div>
                <motion.div
                    variants={IconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaJs className="text-4xl text-yellow-400 mr-2"/>
                </motion.div>
                <motion.div
                    variants={IconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaGithub className="text-4xl text-gray-500 mr-2"/>
                </motion.div>
                <motion.div
                    variants={IconVariants(0.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiCplusplus className="text-4xl text-blue-600 mr-2"/>
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Technologies;