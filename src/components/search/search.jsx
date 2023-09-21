import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePersons, getPersons } from '../../store/Person/personSlice';
export  const Search = ()=>{
    const [field, setField]  = useState('')
    const persons = useSelector((state)=>state.persons.list)
    const Dispatch = useDispatch()
  const getField = (event)=>{
        setField(event.target.value)
  }
  
   const submit=(event)=>{
    let filtreds = []
    event.preventDefault()
    if (field === '') {
        debugger
       Dispatch(getPersons)
    } else{
            
        persons.filter((item)=>{
           if (item.firstname.toLowerCase().includes(field.toLowerCase())) {
                //Dispatch(changePersons(item))
                filtreds.push(item)
                Dispatch(changePersons(filtreds))
                
           }

           
        })
      
       
    }

    
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
