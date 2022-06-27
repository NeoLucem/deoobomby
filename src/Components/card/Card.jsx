import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
        <div class="card mb-3 cardSpace">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={props.image} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{props.title}</h5>
                  <p class="card-text">{props.description}</p>
                  <p class="card-text card-text2"><small class="text-muted">{props.date}</small></p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Card