import axios from 'axios'

const findAllCabecera = async (state) => {
    const peticion = await axios.get('http://localhost:8080/api/v1.0/cabecera')
    state(peticion.data.result)
}

const findCabecera = async (id, state) => {
    try {
        let apiResponce = await axios.get(`http://localhost:8080/api/v1.0/cabecera/${id}`);
        console.log(apiResponce.data.result)
        state(apiResponce.data.result)
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        //console.log(error.response.headers);
    }
}
export {
    findAllCabecera,
    findCabecera
}