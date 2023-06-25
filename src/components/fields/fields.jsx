import  React from "react";

const Fields = ({persons})=>{
    return(
       persons.map((person)=>{
        return(
            <div className="table__row" key={person.id}>
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