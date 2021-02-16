import React from 'react'
import { ResidentContainer } from './ResidentContainer';

export const LocationInfo = ( { residents = []} ) => {

    return (
        <>
            <ResidentContainer residents={ residents } />
        </>
    )
}
