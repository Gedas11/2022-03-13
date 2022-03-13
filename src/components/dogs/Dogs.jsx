import React, {useState, useEffect} from "react"
import Search from "../search/Search"


const Dogs = () => {
    const [dogs, setDogs] = useState ([] )
    const [search, setSearch] = useState ( '' )


   const handleSearch = (term)=> {
         setSearch(term)
    }

    useEffect(()=>{
        fetch(`https://dog.ceo/api/breeds/list/all`)
        .then(response=>response.json())
        .then(data=>setDogs(data))

    },[search])
    return(
        <>
        <div className="container mt-4">
            <Search onSearch ={handleSearch} />
           <h2>Informacija apie ieskoma veisle</h2>
                <div className="row">
                    {!dogs.hasOwnProperty('error')?
                   <DogList dogs={dogs.Search}
    
                </div>
    
        </div>
        </>
    )
}

export default Dogs