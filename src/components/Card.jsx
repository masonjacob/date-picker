import React from 'react'
import {motion} from 'framer-motion';

const Card = ({card}) => {

  return (
    <motion.div className = "card"
    layout 
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}>
      <div className="card-header">
      </div>
      <div className = "card-body">
        <h1 className="card-title">{card.activity}</h1>
      </div>
    </motion.div>
  )
}

export default Card