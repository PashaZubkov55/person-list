import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLimitPage } from "../../store/Person/personSlice";

export const Pagination = ()=>{
   const  persons = useSelector((state)=>state.persons.list)
   const countPage = useSelector((state)=>state.persons.countPage)

   const Dispath = useDispatch()
    useEffect(()=>{
        if (persons !== []) {
            Dispath(getLimitPage())
            console.log(countPage)
            

        }

    })
    
       
        return(
            <div className="pagination">
                <ul className="pagination__items">
                    {countPage.map((page)=>{
                        return(
                                <li className="pagination__item">
                            <a href="#"  className="pagination__link">{page}</a>
                        </li> 
                    )
                        
                        
                    })}
               
    
                </ul>
            </div>
        )
        
   
    
   
}