import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLimitPage, changePersons , paginationPages  } from "../../store/Person/personSlice";

export const Pagination = ()=>{
   const  persons = useSelector((state)=>state.persons.list)
   const countPage = useSelector((state)=>state.persons.countPage)
   const firstRow = useSelector((state)=>state.persons.firstRow)
   const lastRow = useSelector((state)=>state.persons.lastRow)
   const limitPage = useSelector((state)=>state.persons.limitPage)
   const countNamberPage = useSelector((state)=>state.persons.countNamberPage)






   const Dispath = useDispatch()
    useEffect(()=>{
      
        if (persons !== []) {
            Dispath(getLimitPage())
             console.log(countPage)

           
            

        }

    }, )
  
   
   /*
   const pagination = (index)=>{
    console.log(index)
    const array = localStorage.getItem('list')
    const list = JSON.parse(array)

   const  first = index * limitPage 
    const last  =  first - limitPage + 1
    const paginatorList  = list.slice(last,first)
    console.log(paginatorList)
   Dispath(changePersons(paginatorList))
   }
   */
    
       
        return(
            <div className="pagination" >
                <ul className="pagination__items">
                    {countPage.map((page)=>{
                        return(
                           
                                <li className="pagination__item" key={page}  onClick={()=>{Dispath(paginationPages(page))}} >
                            <a href="#"  className="pagination__link">{page}</a>
                        </li> 
                    )
                        
                        
                    })}
               
    
                </ul>
            </div>
        )
        
   
    
   
}