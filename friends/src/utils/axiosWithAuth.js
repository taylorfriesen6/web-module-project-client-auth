// copied without modification from guided project

import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL:'http://localhost:5000/api',
        headers: {
            authorization: token
        }
    });
}