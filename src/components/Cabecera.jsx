import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findCabecera } from '../service/CabeceraService'

const Cabecera = () => {

    const [cabecera, setCabecera] = useState(null)
    const params = useParams()

    useEffect(() => {
        findCabecera(params.id, setCabecera)
    }, [params.id])

    return (
        <>
            {cabecera != null ? (
                <div>
                    <h2> Cabecera con el id {params.id}</h2>
                    <p>Nombre: {cabecera.nombre}</p>
                </div>
            ) : ('No hay cabecera')}
        </>
    )
}

export default Cabecera