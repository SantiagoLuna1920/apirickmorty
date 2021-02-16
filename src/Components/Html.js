import React from 'react'
import '../index.css'

export const Html = ({dates}) => {

    const {name:location} = dates.location;
    let { name, image, status, species, gender, type } = dates;

    console.log(name, location, image, status, species, gender, type)
    return (
        <div className="container-api animate__animated animate__backInDown">
            <div className="imgs">
                <img  src={ image } />
            </div>
            <div className="info">
                <h2> { name } </h2>
                {
                status==="Dead" ? <div className="radiu-dead"></div> :
                status==="Alive" ? <div className="radiu-alive"></div> :
                status==="unknown" ? <div className="radiu-unknown"></div>:
                <div className="radiu-live"></div>
                }
                <h3> { status } - { species } </h3>
                <p>Last know location:</p>
                <h4> { location } </h4>
                <p>Gender:</p>
                <h4> { gender } </h4>
                <p>Type:</p>
                { (type==="") ? <h4> Unknown </h4> : <h4> { type } </h4> }
            </div>
        </div>
    )
}
