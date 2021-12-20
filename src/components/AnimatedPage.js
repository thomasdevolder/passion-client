import { motion } from "framer-motion"



const AnimatedPage = ({children, style}) => {

    const animations = {
    inital: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100},
    duration: 1,
    }

    return (
        <motion.div className={style.anime}  inital={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 1}} >
            {children}
        </motion.div>
    )
}

export default AnimatedPage