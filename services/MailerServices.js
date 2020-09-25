import http from './BaseServices';

const sendMail = (data) => http.post('/authorize/contact',data)
        .then(response => response.data);

export default {
    sendMail
}