import React from 'react'
import './Modal.css'

export const Modal = (props) => {
    console.log(props)
    return (
        <div className='modal'>
            <div>
                <div>
<div>
    {/* image in here */}
        <img src={props.img} className="card-img" alt="project" />
      
</div>
    <h4>{props.name}</h4>
    <p><span>App Desc:</span>{props.appDesc}</p>
    <br/>
    <p><span>Tech Stack:</span>{props.techStack}</p>
                </div>
                <div>
                    {/* responsibilites in here */}
                </div>

            </div>
        </div>
    )
}
