import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export  const Search = ({data})=>{
    const [field, setField]  = useState('')
  useEffect(()=>{
    console.log(data)
  },[data])
  const getField = (event)=>{
        setField(event.target.value)
  }
   const submit=(event)=>{
    event.preventDefault()
   }
    return(
        <form className="search" onSubmit={submit}>
            <div className="search__wrapper">
                <div className="search__fild">
                    <input type="text" onChange={getField} className="searchField" placeholder='search...' />
                </div>
                <div className="search__button">
                    <button  className="searchButton" type='submit' >search</button>
                </div>
            </div>
        </form>
    )
}
