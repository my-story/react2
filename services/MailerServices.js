import http from './BaseServices';

const sendMail = (name,email,message) =>
    http.post('/authorize/contact',name,email,message)
        .then(response => response.data);

export default {
    sendMail
}