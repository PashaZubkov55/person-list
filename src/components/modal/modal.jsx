import react, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detalModal } from "../../store/Person/personSlice";
 export const Modal = ()=>{
    const  modal = useSelector((state)=>state.persons.modal)
    const  person = useSelector((state)=>state.persons.person)
    const dispatch = useDispatch()
    const closeModale = ()=>{
        dispatch(detalModal(false))
    }
    if (modal) {
        return(
        
            
            <div className="modal">
            <div className="modal__window" >
                <div className="modal__content">
                 <div className="modal__images">
                    <img src="https://vuzopedia.ru/storage/app/media/male.jpg" alt="avatar" className="modalImage" /></div>
                </div>
                <div className="modal__text">
                   <div className="modal__item"><strong>Имя: </strong>{person.firstname}</div>
                   <div className="modal__item"><strong>Фамилия: </strong>{person.lastname}</div>
                   <div className="modal__item"><strong>Email: </strong>{person.email}</div>
                   <div className="modal__item"><strong>Телефон: </strong>{person.phone}</div>
                </div>
            </div>
            <div className="overlay" onClick={closeModale}></div>
        </div>
       
    
    )
    } else{
        return
    }

}