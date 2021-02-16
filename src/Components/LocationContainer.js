import React, { useEffect, useState } from 'react'
import { Promises } from '../Helpers/Promise'
import { LocationInfo } from './LocationInfo'

export const LocationContainer = ( { state } ) => {

    const [location, setLocation] = useState( "" )

    useEffect(()=> {
        Promises( state )
            .then( setLocation )
    } , [ state ] )

    return (
        <>
            <LocationInfo  residents={ location } />
        </>
    )
}
