import api from './api'

export const login = data => {
    return api
    .post('auth/', {
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

export const createHandout = data => {
    return api
    .post('handout', {
        title: data.title,
        description: data.description,
    })
    .then(res => {
        return true
    })
    .catch(err => {
        return false;
    })
}

export const createChannel = data => {
    return api
    .post('channel', {
        title: data.title,
        description: data.description,
        users: data.users
    })
    .then(res => {
        return true
    })
    .catch(err => {
        return false;
    })
}

export const createFiles = data => {
    return api
    .post('channel', {
        title: data.title,
        description: data.description,
        file: data.file
    })
    .then(res => {
        return true
    })
    .catch(err => {
        return false;
    })
}