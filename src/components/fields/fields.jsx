import  React from "react";
import { useDispatch } from "react-redux";
import { getPerson } from "../../store/Person/personSlice";


const Fields = ({persons})=>{
    const dispatch = useDispatch()
  
    return(
       persons.map((person)=>{
        return(
            <div className="table__row" key={person.id} onClick={()=>{dispatch(getPerson(person))}}>
                <div className="table__item">{person.firstname}</div>
                <div className="table__item">{person.lastname}</div>
                <div className="table__item">{person.email}</div>
                <div className="table__item">{person.phone}</div>
            </div>
        )
       })
    )
}

export default Fields