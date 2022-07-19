import React, { useEffect, useState } from 'react'
import { findAllCabecera } from '../service/CabeceraService'

const CabeceraLista = () => {

    const [cabeceras, setCabeceras] = useState(null)

    useEffect(() => {
        findAllCabecera(setCabeceras)
    }, [])


    return (
        <>
            {cabeceras != null ? (
                cabeceras.map(cabecera => (
                    <div key={cabecera.id}>
                        <a href={`/cabecera/${cabecera.id}`}>{cabecera.nombre}</a>
                    </div>
                ))
            ) : ('No hay cabeceras')}

        </>
    )
}

export default CabeceraLista