import React, { useEffect, } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersons, changePersons } from "../../store/Person/personSlice";
import Fields from "../fields/fields";
import { Pagination } from "../pagination/pagination";
import { Search } from "../search/search";



// https://fakerapi.it/api/v1/persons - пользователи 

const Table = ()=>{

    const dispatch = useDispatch()
    const persons = useSelector((state)=>state.persons.list)

    const [data, setData] = useState([])

    useEffect(()=>{
      
          dispatch(getPersons())
        
          setData(persons)
          if (  localStorage.getItem('list') === '[]') {
            localStorage.setItem('list', JSON.stringify(persons))
            console.log(persons)
          }
         
        
        
     
    } ,[])
      const sortData= (field)=>{
        let arraySort = persons.concat()

       let  array = arraySort.sort((a, b)=>{
          return a.field>b.field? 1: -1
        })
        dispatch(changePersons(array))
        console.log(array)

        
      }
  
    return(

      
      <div className="container">
        <Search />
      <div className="table">
        <div className="table__wrapper">
          <div className="table__header ">
            <div className="table__field" onClick={()=>{sortData('firstname')}}>
              Имя 
              <img src="https://icon-library.com/images/img_274238_155.png" alt="icon" className="table__icon" />
              </div>
            <div className="table__field" onClick={()=>{sortData('lastname')}}>
              Фамилия  
              <img src="https://icon-library.com/images/img_274238_155.png" alt="icon" className="table__icon" />
              </div>
            <div className="table__field" onClick={()=>{sortData('email')}} >
              Email  
              <img src="https://icon-library.com/images/img_274238_155.png" alt="icon" className="table__icon" />
              </div>
            <div className="table__field" onClick={()=>{sortData('phone')}}>
              Телефон  
              <img src="https://icon-library.com/images/img_274238_155.png" alt="icon" className="table__icon" />
              </div>
          </div>
        </div>
        <Fields />
        <Pagination/>
        </div>
        </div>
       
    )
    
       
                    
                    

                   
                      
                    

              
       
    
    
}
export default Table