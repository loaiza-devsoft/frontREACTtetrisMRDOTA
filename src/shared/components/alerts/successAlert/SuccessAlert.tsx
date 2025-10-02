import React, { useEffect, useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import "./succesAlert.css"


interface Props{
    mensaje: string
}

export default function SuccessAlert(props: Props) {

    const {mensaje} = props;

    const [visible, setVisible] = useState(true);

    useEffect(()=>{

        if (visible) {
            const timer = setTimeout(()=>{
                setVisible(false);
            }, 4000);

            return () => clearTimeout(timer);
        }

    }, [visible])

    if (!visible) return null;


    return (
        <div className="successAlert__container">

            <div className="successAlert__icono">
                <FaCircleCheck size={27} />
            </div>

            <div className="successAlert__mensaje">
                <p className='successAlert__p'>{mensaje}</p>
            </div>

        </div>
    )
}
