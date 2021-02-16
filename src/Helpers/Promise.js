

export const Promises = async ( location ) => {
    const res = await fetch(`https://rickandmortyapi.com/api/location/${ location }`)
    const data = await res.json()
    const {residents} = data

    return residents.slice(0,10)
}


export const PromisesInfo = async ( Element ) => {
        const res = await fetch(Element)
        const data = await res.json()
        
        return data
}

