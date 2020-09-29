import http from './BaseServices';

const sendMail = (data) => http.post('/authorize/contact',data)
        .then(response => response.data);

const sendFeedback = (message) => http.post('/authorize/feedback', message)
        .then(response => response.data);


export default {
    sendMail,
    sendFeedback
}