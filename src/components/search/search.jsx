import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export  const Search = ({persons})=>{
    const [field, setField]  = useState('')
  useEffect(()=>{
    console.log(persons)
  },[persons])
  const getField = (event)=>{
        setField(event.target.value)
  }
    return(
        <form className="search">
            <div className="search__wrapper">
                <div className="search__fild">
                    <input type="text" onChange={getField} className="searchField" placeholder='search...' />
                </div>
                <div className="search__button">
                    <button className="searchButton">search</button>
                </div>
            </div>
        </form>
    )
}
