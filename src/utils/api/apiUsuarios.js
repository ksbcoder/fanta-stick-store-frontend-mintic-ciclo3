import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = 'http://localhost:5000'
//const baseUrl = 'https://thawing-plateau-10491.herokuapp.com'

const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
}

//METODO GET 
export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: `${baseUrl}/usuarios/`,
        headers: {
            Authorization: getToken()
        }
    };
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

export const obtenerInfoUsuario = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: `${baseUrl}/usuarios/self`,
        headers: {
            //PASO 3 > ENVIARLE EL TOKEN AL BACKEND
            Authorization: getToken()
        }
    };
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

//METODO POST
export const registrarUsuarios = async (data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: `${baseUrl}/usuarios/`, //url de mi base de datos
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
        data,
    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

//METODO PATCH
export const actualizarUsuario = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `${baseUrl}/usuarios/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
        data,
    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

//METODO DELETE
export const eliminarUsuario = async (id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `${baseUrl}/usuarios/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
    };
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};