import React from 'react'
import './About.css'
import Typewriter from "typewriter-effect";
import {Button2, Title} from "../../Components";
const About = () => {
  return (
    <div>
      <div class='About_me'>
        <div className='About_section1'>
          <h1>Hi, my name is</h1>
          <h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Gerard Obomby').callFunction(() => {
              console.log('String typed out!');
              })
              .pauseFor(2500)
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
            }}
          />
          </h2>
          <h3>I develop stuff for the web.</h3>
          <p>
            I'm a web developer specializing in building and designing awesome digital products.<br/>
            Currently I'm focused on my studies and working on projects.<br/>
            Hit me for collaboration.
            <a href="mailto:deoobomby@gmail.com"><Button2 name="Work with me!" style={{margin : "50px 0px 0px 0px"}}/></a>
            
          </p>
          
        </div>
        <div className='About_section2'>
          <Title name="About me" /> 
          <p>
            Hello, my name is Deo and I love creating things. I started my journey as a web developer back in 2019 as a self taught programmer.
            I started by learning html and css then quickly got through javascript. Currently, I'm studying IT at university in Ghana and started a new trip as UI/UX designer to let my creations blow your mind. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default About