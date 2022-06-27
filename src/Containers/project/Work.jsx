import React from 'react'
import './Work.css'
import { Title, Card } from '../../Components'
import image1 from '../../assets/idmb_img.png'
import image2 from '../../assets/portfolio.png'
const Work = () => {
  return (
    <div>
      <div className='work'>
        <Title name="My work"/>
        <Card
          image={image1}
          title="IDMB STREAM" 
          description="Application for buying and streaming music on Android and IOS.
                       Wireframe and interaction design" 
          date="2021"
         />
         <Card
          image={image2}
          title="Personal website" 
          description="Designed and built the whole website to show case my work and experience, using latest technologies" 
          date="2019"
         />
      </div>
    </div>
  )
}

export default Work