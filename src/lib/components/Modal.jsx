import React, { useState } from 'react';


export default function Modal({message, isOpen, setIsOpen}){
    // const [modalIsOpen, setModalIsOpen] = useState(isOpen)

    const handleClose=() =>{
        setIsOpen(false)
    }

    const handleClickOutsideModal =(e) =>{
        if(e.target.className === "modal" ){
            console.log("Ferme la modale");
            handleClose()
        }
    }
    
    return(
        <div className={ isOpen ? "backgroundModal ": "hidde"  }>
            <div className="modal" onClick={handleClickOutsideModal} >
                <div className="closeContent" onClick={handleClose}> 
                    <p>X</p>
                </div>
                <p className="message" >{message} </p>
            </div>
        </div>
    )

}