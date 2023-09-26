import React, { useEffect, } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersons } from "../../store/Person/personSlice";
import Fields from "../fields/fields";
import { Search } from "../search/search";



// https://fakerapi.it/api/v1/persons - пользователи 

const Table = ()=>{

    const dispatch = useDispatch()
    const persons = useSelector((state)=>state.persons.list)
    const [data, setData] = useState([])

    useEffect(()=>{
      
          dispatch(getPersons())
          setData(persons)
          //console.log(data)
         
        
        
     
    } ,[])
    return(

      
      <div className="container">
        <Search />
      <div className="table">
        <div className="table__wrapper">
          <div className="table__header ">
            <div className="table__field">Имя <img src="https://icon-library.com/images/img_274238_155.png" alt="icon" className="table__icon" /></div>
            <div className="table__field">Фамилия  <img src="https://icon-library.com/images/img_274238_155.png" alt="icon" className="table__icon" /></div>
            <div className="table__field">Email  <img src="https://icon-library.com/images/img_274238_155.png" alt="icon" className="table__icon" /></div>
            <div className="table__field">Телефон  <img src="https://icon-library.com/images/img_274238_155.png" alt="icon" className="table__icon" /></div>
          </div>
        </div>
        <Fields />
        </div>
        </div>
       
    )
    
       
                    
                    

                   
                      
                    

              
       
    
    
}
export default Table