import React from 'react'
import { Html } from './Html'

export const ResidentInfo = ( {state} ) => {

    return (
        <>
            { state.map((element)=> {
        return <Html key={ element.id } dates={ element } />
    }) }
        </>
    )
}
