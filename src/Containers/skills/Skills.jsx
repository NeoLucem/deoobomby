import React from 'react'
import './Skills.css'
/*import { Title } from '../../Components'*/
const Skills = () => {
  return (
    <div>
      {/*<Title name="Skills" />*/}
      <span className='txt'>
        Here are some technologies I've been working with:
      </span>
      <div class="container">
        <div class="row row-cols-3 skills_grid">
          <div class="col">Javascript</div>
          <div class="col">Html</div>
          <div class="col">Python</div>
          <div class="col">React js</div>
          <div class="col">Css</div>
          <div class="col">Django</div>
          <div class="col">Node js</div>
          <div class="col">Bootstrap</div>
          <div class="col">Java</div>
        </div>
      </div>      
    </div>
  )
}

export default Skills