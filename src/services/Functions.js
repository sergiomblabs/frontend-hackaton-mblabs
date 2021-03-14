import api from './api'

export const login = data => {
    return api
    .post('auth/', {
        email: data.email,
        password: data.password,
    })
    .then(res => {
        console.log(res);
        return res.data;
    })
    .catch(err => {
        console.log(err);
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

export const createHandoutComment = data => {
    return api
    .post('handout/create-comment', {
        text: data.comment,
        id_handout: data.idHandout,
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

export const getNews = () => {
    return api
    .get('news')
    .then(res => {
        return res.data
    })
    .catch(err => {
        return false;
    })
}

export const getNewsById = (id) => {
    return api
    .get(`news/${id}`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return false;
    })
}

export const getHandouts = () => {
    return api
    .get('handout')
    .then(res => {
        return res.data
    })
    .catch(err => {
        return false;
    })
}

export const getHandoutById = (id) => {
    return api
    .get(`handout/${id}`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return false;
    })
}
