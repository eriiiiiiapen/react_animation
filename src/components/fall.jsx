import { motion } from "framer-motion";
import { useState } from 'react';

function Fall() {
  const container = {
    hidden: { rotate: -90 },
    show: {
      rotate: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemA = {
    hidden: { scale: 0, top: 40 },
    show: { scale: 1, top: 40 },
  }

  const itemB = {
    hidden: { scale: 0, top: 110 },
    show: { scale: 1, top: 110 },
  }

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container w-full h-[300px] bg-black-900 d-flex items-center content-center relative">
        <motion.div initial="hidden" animate="show" className="w-[200px] h-[200px] bg-yellow-700 rounded-3xl relative" variants={container} key={count}>
            <div className="w-[50px] h-[50px] bg-white rounded-full absolute
                            [&:first-of-type]:top-10 [&:first-of-type]:left-10
                            [&:nth-of-type(2)]:top-10 [&:nth-of-type(2)]:right-10
                            [&:nth-of-type(3)]:top-28 [&:nth-of-type(3)]:left-10
                            [&:last-of-type]:top-28 [&:last-of-type]:right-10" variants={itemA}></div>
            <div className="w-[50px] h-[50px] bg-white rounded-full absolute
                            [&:first-of-type]:top-10 [&:first-of-type]:left-10
                            [&:nth-of-type(2)]:top-10 [&:nth-of-type(2)]:right-10
                            [&:nth-of-type(3)]:top-28 [&:nth-of-type(3)]:left-10
                            [&:last-of-type]:top-28 [&:last-of-type]:right-10" variants={itemA}></div>
            <div className="w-[50px] h-[50px] bg-white rounded-full absolute
                            [&:first-of-type]:top-10 [&:first-of-type]:left-10
                            [&:nth-of-type(2)]:top-10 [&:nth-of-type(2)]:right-10
                            [&:nth-of-type(3)]:top-28 [&:nth-of-type(3)]:left-10
                            [&:last-of-type]:top-28 [&:last-of-type]:right-10" variants={itemB}></div>
            <div className="w-[50px] h-[50px] bg-white rounded-full absolute
                            [&:first-of-type]:top-10 [&:first-of-type]:left-10
                            [&:nth-of-type(2)]:top-10 [&:nth-of-type(2)]:right-10
                            [&:nth-of-type(3)]:top-28 [&:nth-of-type(3)]:left-10
                            [&:last-of-type]:top-28 [&:last-of-type]:right-10" variants={itemB}></div>
        </motion.div>
        <button 
          className="w-15 h-10 bg-white absolute top-2 left-2 rounded d-flex content-center items-center cursor-pointer font-bold"
          onClick={() => setCount(count + 1)}>
            Retry
        </button>
      </div>
    </>
  )
}

export default Fall;