import React,{ useState } from "react";


export default function Modal(message, isOpen){
    console.log(message)
    console.log(isOpen);
    const [modalIsOpen, setModalIsOpen] = useState(isOpen)

    const handleClose=() =>{
        setModalIsOpen(false)
    }

    const handleClickOutsideModal =(e) =>{
        if(e.target.className == "modal" ){
            handleClose()
        }
    }
    
    return(
        <div className={ modalIsOpen ? "backgroundModal ": "hidde"  }>
            <div className="modal" onClick={handleClickOutsideModal} >
                <div className="closeContent" onClick={handleClose}> 
                    <p>X</p>
                </div>
                <p className="message" >{message} </p>
            </div>
        </div>
    )

}