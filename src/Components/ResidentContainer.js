import { useEffect, useState } from "react"
import { PromisesInfo } from "../Helpers/Promise"
import { ResidentInfo } from "./ResidentInfo"
import '../index.css'

export const ResidentContainer = (  {residents} ) => {

    const [state, setState] = useState([])

    const [loading, setloading] = useState({
        data: [],
        loading: true
    })

    useEffect(()=> {
        
        if (residents!="") {
            setState( [] )
            residents.map( ( Element ) => {
                PromisesInfo( Element )
                    .then( info => setState( state => [ info, ...state ] ) )
                    .then( setloading( {
                        data: [],
                        loading: false
                    } ) )
            } )
        }

    }, [ residents ])

    return (
        <>
        { loading.loading && <div className="spinner"></div> }
            <ResidentInfo  state={ state } />
        </>
    )
}
