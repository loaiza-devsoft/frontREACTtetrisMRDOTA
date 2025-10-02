import React, { useState, useEffect } from "react";
import { IoWarning } from "react-icons/io5";
import "./errorAlert.css";


interface Props{
    mensaje: string
}

export function ErrorAlert(props: Props) {

    const {mensaje} = props;

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="errorAlert__container">
            <div className="errorAlert__icono">
                <IoWarning size={27} />
            </div>
            <div className="errorAlert__mensaje">
                <p className="errorAlert__p">{mensaje}</p>
            </div>
        </div>
    );
}
