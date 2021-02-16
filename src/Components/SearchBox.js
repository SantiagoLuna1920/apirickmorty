import React, { useState } from 'react'
import { LocationContainer } from './LocationContainer';
import '../index.css'

export const SearchBox = () => {

    const [state, setState] = useState("");

    const [info, setInfo] = useState( Math.floor( Math.random(  ) * ( 108 - 1 ) + 1 ) );

    const ChangeInput = ( e ) => {
        setState( e.target.value )
    }

    const SubmitForm = ( e ) => {
        e.preventDefault()
        if (state>=1 && state<=108) {
            setInfo( state );
            setState( "" )
        } else {
            setInfo( info )
            setState( "" )
        }
    }

    return (
        <>
        <div className="containerSpinner">
        <div className="containerinput">
            <form onSubmit={ SubmitForm }>
                <input
                type="number"
                value={ state }
                placeholder="Search location By ID"
                onChange={ ChangeInput }
                 />
                <button className="btn btn-primary">Search Location</button>
            </form>
        </div>
        <div id="container">
        <LocationContainer state={ info } />
        </div>
        </div>
        </>
    )
}
