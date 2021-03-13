import api from './api'

export const login = data => {
    return api
    .post('auth/driver/resetPassword', {
        token: data.token,
        password: data.password,
    })
    .then(res => {
        return true
    })
    .catch(err => {
        return false;
    })
}
/*****************************/