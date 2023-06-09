import React from 'react'
import {BallCanvas} from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 '>

      {technologies.map((technology)=>(
        <div className='w-28 h-28 text-center' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <h6 className="font-poppins">{technology.name}</h6>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"")