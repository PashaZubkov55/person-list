import react, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detalModal } from "../../store/Person/personSlice";
 export const Modal = ()=>{
    const  modal = useSelector((state)=>state.persons.modal)
    const dispatch = useDispatch()
    const closeModale = ()=>{
        dispatch(detalModal(false))
    }
    if (modal) {
        return(
        
            
            <div className="modal">
            <div className="modal__window" >
                <div className="modal__content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro exercitationem iure eaque vitae eum soluta assumenda amet minima. Rerum, dicta.
                </div>
            </div>
            <div className="overlay" onClick={closeModale}></div>
        </div>
       
    
    )
    } else{
        return
    }

}