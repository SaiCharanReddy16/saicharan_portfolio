import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa6";
import { SiOracle } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants =(duration) => ({
    inital: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCsharp className="text-7xl text-purple-500" />
            </motion.div>
            <motion.div 
             variants={iconVariants(3.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div
             variants={iconVariants(4)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpring className="text-7xl text-green-600" />
            </motion.div>
            <motion.div
             variants={iconVariants(4.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className="text-7xl text-green-600" />
            </motion.div>
            <motion.div
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
             variants={iconVariants(5.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiOracle className="text-7xl text-red-600" />
            </motion.div>
            <motion.div 
             variants={iconVariants(6)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div 
             variants={iconVariants(6.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-blue-400" />
            </motion.div>
        </motion.div>
    </div>
  );
}

export default Technologies